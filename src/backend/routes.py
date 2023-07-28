from flask import Flask, request, jsonify
from flask_cors import CORS
import db

app = Flask(__name__)
CORS(app)

@app.route('/login', methods=['POST'])
def validateLogin():
    login = request.json['login']
    password = request.json['password']
    result = db.loginVerify(login, password)
    return result

@app.route('/employees', methods=['GET'])
def getEmployees():
    result = db.getEmployees()
    return result

@app.route('/employees/<id>',methods=['DELETE'])
def deleteEmployee(id):
    result = db.deleteEmployee(id)
    return result

@app.route('/employees', methods=['PUT'])
def updateEmployee():
    id = request.json['id']
    login = request.json['login']
    name = request.json['name']
    password = request.json['password']
    result = db.updateEmployee(id,name,login,password)
    return result

@app.route('/employees', methods=['POST'])
def addEmployee():
    login = request.json['login']
    name = request.json['name']
    password = request.json['password']
    result = db.newEmployee(name, login, password)
    return result

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)