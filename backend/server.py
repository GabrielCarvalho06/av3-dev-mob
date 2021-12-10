#Gabriel da Silva Carvalho
#0050013382

from flask import Flask
from flask_cors import CORS, cross_origin
from listFunc import listFuncionarios


app = Flask(__name__)
CORS(app)


# rota API
@app.route("/professores_old")
def professores_old():
    return {"professores" :["Alex", "Marcia", "Fabio"]}

@app.route("/funcionarios")
def funcionarios():
    resultado = listFuncionarios()
    return resultado

if __name__ == "__main__":
    app.run(debug=True)