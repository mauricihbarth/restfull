<template>
  <div>
    <titulo :texto="`Aluno: ${aluno.nome}`" :btnVoltar="!visualizando">
      <button v-show="visualizando" class="btn btnEditar" @click="editar()">Editar</button>
    </titulo>
    <table>
      <tbody>
        <tr>
          <td class="colPequeno">Matricula:</td>
          <td>
            <label>{{ aluno.id }}</label>
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Nome:</td>
          <td>
            <label  v-if="visualizando">{{ aluno.nome }}</label>
            <input  v-else  v-model="aluno.nome" type="text" />
          </td>
        </tr>
        <tr>
          <td class="colPequeno">SobreNome:</td>
          <td>
            <label  v-if="visualizando">{{ aluno.sobrenome }}</label>
            <input v-else  v-model="aluno.sobrenome" type="text" />
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Data Nascimento:</td>
          <td>
            <label  v-if="visualizando">{{ aluno.dataNasc }}</label>
            <input v-else  v-model="aluno.dataNasc" type="text" />
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Professor:</td>
          <td>
            <label  v-if="visualizando">{{ aluno.professor.nome }}</label>
            <select v-else  v-model="aluno.professor">
              <option
                v-for="(professor, index) in professores"
                :key="index"
                v-bind:value="professor"
              >
                {{ professor.nome }}
              </option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>

    <div style="margin-top: 10px">
        <div v-if="!visualizando">
            <button class="btn btnSalvar" @click="salvar(aluno)">
                Salvar
            </button>
            <button class="btn btnCancelar" @click="cancelar()">
                Cancelar
            </button>
        </div>
    </div>    
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
      aluno: {},
      professores: [],
      idAluno: this.$route.params.id,
      visualizando: true
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/alunos/" + this.idAluno)
      .then((res) => res.json())
      .then((aluno) => (this.aluno = aluno));
    this.$http
      .get("http://localhost:3000/professores")
      .then((res) => res.json())
      .then((professor) => {
        this.professores = professor;
      });
  },
  methods: {
editar(){
    this.visualizando = !this.visualizando;
},
salvar(_aluno){
  //  this.visualizando = !this.visualizando;
  let _alunoEditar = {
    id:_aluno.id,
    nome:_aluno.nome,
    sobrenome:_aluno.sobrenome,
    dataNasc:_aluno.dataNasc,
    professor:_aluno.professor
  }

    this.$http
      .put(`http://localhost:3000/alunos/${_alunoEditar.id}`, _alunoEditar);

    this.visualizando = !this.visualizando;      
},
cancelar(){
    this.visualizando = !this.visualizando;
}

  },

};
</script>

<style scoped>
.colPequeno {
  width: 20%;
  text-align: right;
  background-color: rgb(140, 0, 255);
  font-weight: bold;
}

input,
select {
  margin: 0px;
  padding: 5px 10px;
  font-size: 0.9em;
  border: 1px solid silver;
  font-family: Monteserrat;
  border-radius: 5px;
  width: 90%;
  background-color: rgb(245, 245, 245);
}
select {
  height: 38px;
  width: 100%;
}
.btnEditar {
  float: right;
  background-color: rgb(199, 199, 199);
}
.btnSalvar {
  float: right;
  background-color: rgb(13, 231, 13);
}
.btnCancelar {
  float: LEFT;
  background-color: rgb(245, 8, 8);
}
</style>
