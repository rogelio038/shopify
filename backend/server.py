from flask import Flask, jsonify, request

app = Flask(__name__)

tasks = [
    {"id": 1, "title": "Configurar servidor", "completed": True},
    {"id": 2, "title": "Conectar base de datos", "completed": False}
]

@app.route("/api/tasks", methods=["GET"])
def get_tasks():
    return jsonify(tasks), 200

@app.route("/api/tasks", methods=["POST"])
def add_task():
    data = request.get_json()
    new_task = {"id": len(tasks) + 1, "title": data.get("title", ""), "completed": False}
    tasks.append(new_task)
    return jsonify(new_task), 201

if __name__ == "__main__":
    app.run(debug=True, port=5000)
