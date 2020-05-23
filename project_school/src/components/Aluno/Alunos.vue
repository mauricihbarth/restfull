<template>
  <div>
    <titulo :texto="professorId != undefined ? 'Professor: ' + professor.nome  : 'Todos os alunos'" />
    <div v-if="professorId != undefined">  
      <input
        type="text"
        placeholder="Nome do Aluno"
        v-model="nome"
        v-on:keyup.enter="addAluno()"
      />      
      <button class="btn btnInput" @click="addAluno()">
        Inserir
      </button>
    </div>

    <table>
      <thead>
        <th>Mat</th>
        <th>Nome</th>
        <th>Op</th>
      </thead>
      <tbody v-if="alunos.length">
        <tr v-for="(aluno, index) in alunos" :key="index">
          <td>{{ aluno.id }}</td>
          <!-- <td>{{ index + 1}}</td>-->
          <router-link :to="`/alunoDetalhe/${aluno.id}`" tag="td" style="cursor: pointer">
            {{ aluno.nome }} {{ aluno.sobrenome }}

          </router-link>

            
          <td>
            <button class="btn btndanger" @click="remover(aluno)">
              Remover
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot v-else>
        Nenhum aluno encontrado
      </tfoot>
    </table>
  </div>
</template>

<script>
import Titulo from "../_share/Titulo";

export default {
  components: {
    Titulo,
  },

  data() {
    return {
      titulo: "Aluno",
      professorId: this.$route.params.prof_id,
      professor: [],
      nome: "Alunos",
      alunos: []
        // { id: 1, nome: "Marcus", sobrenome: "Borba"  },
        // { id: 2, nome: "Ze", sobrenome: "Cesar" },
        // { id: 3, nome: "João", sobrenome: "Silva" },      
    };
  },

  created() {
    if (this.professorId) {
      this.carregarProfessores();

      this.$http
        .get("http://localhost:3000/alunos?professor.id=" + this.professorId)
        .then((res) => res.json())
        .then((alunos) => (this.alunos = alunos));
    } else {
      this.$http
        .get("http://localhost:3000/alunos")
        .then((res) => res.json())
        .then((alunos) => (this.alunos = alunos));
    }
  },

  props: {},
  methods: {
    addAluno() {
      let _aluno = {
        nome: this.nome,
        sobrenome: "",
        professor: {
              id: this.professor.id,
              nome: this.professor.nome
        }
      };

      this.$http
        .post("http://localhost:3000/alunos", _aluno)
        .then((res) => res.json())
        .then((alunoRetornado) => {
          this.alunos.push(alunoRetornado);
          this.nome;
        });

      //  this.alunos.push(_aluno);
      //  console.log("----------");
      //  this.nome = "";
    },
    remover(aluno) {
      this.$http.delete(`http://localhost:3000/alunos/${aluno.id}`).then(() => {
        let indice = this.alunos.indexOf(aluno);
        this.alunos.splice(indice, 1);
      });
    },

    carregarProfessores() {
      this.$http
        .get("http://localhost:3000/professores/" + this.professorId)
        .then((res) => res.json())
        .then((professor) => {
          this.professor = professor; 
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: calc(100% - 195px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  color: gray;
  display: inline;
}

.btnInput {
  width: 150px;
  border: 0px;
  color: brown;
  padding: 20px;
  font-size: 1.3em;
  background-color: peru;
}

.btnInput:hover {
  width: 150px;
  border: 0px;
  padding: 20px;
  margin: 0;
}
</style>
