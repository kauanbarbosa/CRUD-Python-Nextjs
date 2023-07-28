import oracledb

connection = oracledb.connect(
    user="SYSTEM",
    password='yourpassword',
    dsn="localhost/xe")

print("Conectado com sucesso!")
cursor = connection.cursor()

# Criando tabela
try:
    cursor.execute("""
    create table person (
        id_person number generated always as identity,
        name_person varchar2(40),
        login_person varchar2(40),
        password_person varchar2(40),
        primary key (id_person))""")
except:
    print('Erro na criação da tabela!')



def loginVerify(login, password):
    sql = f"SELECT ID_PERSON FROM PERSON WHERE LOGIN_PERSON = '{login.lower()}' and PASSWORD_PERSON = '{password.lower()}'"
    result = []
    try: 
        print(f"{sql}")
        for rows in cursor.execute(sql):
            result.append(rows)
        return result
    except Exception as error:
        print(f"{error}") 
        return result
    
def getEmployees():
    sql = "SELECT * FROM PERSON ORDER BY ID_PERSON"
    result = []
    try: 
        print(f"{sql}")
        for rows in cursor.execute(sql):
            result.append(rows)
        return result
    except Exception as error:
        print(f"{error}")
        return result

def deleteEmployee(id):
    sql = f"DELETE FROM PERSON WHERE ID_PERSON = {id}"
    try:
        print(f"{sql}")
        cursor.execute(sql)
        cursor.execute("COMMIT")
        return 'OK'
    except Exception as error:
        print(f"{error}")
        return 'ERROR'

def updateEmployee(id, name, login, password):
    sql = f"UPDATE PERSON SET NAME_PERSON='{name}', LOGIN_PERSON = '{login}', PASSWORD_PERSON = '{password}' WHERE ID_PERSON = {id}"
    try:
        print(f'{sql}')
        cursor.execute(sql)
        cursor.execute('COMMIT')
        return 'OK'
    except Exception as error: 
        print(f"{error}")
        return "ERROR"
    
def newEmployee(name,login,password):
    sql = f"INSERT INTO PERSON (NAME_PERSON,LOGIN_PERSON,PASSWORD_PERSON) VALUES (:0,:1,:2)"
    data = [name, login, password]
    try : 
        print(f"{sql} {data}")
        cursor.execute(sql, data)
        cursor.execute("COMMIT")
        print("SUCCESS")
        return 'ok'
    except Exception as error: 
        print(f"{error}")
        return 'ERROR'
