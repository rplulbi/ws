## API GOLANG + CRUD

```go
package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type User struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

var users []User

func main() {
	// Menginisialisasi router
	router := http.NewServeMux()

	// Menambahkan handler untuk endpoint '/users'
	router.HandleFunc("/users", getUsersHandler).Methods("GET")

	// Menambahkan handler untuk endpoint '/users'
	router.HandleFunc("/users", createUserHandler).Methods("POST")

	// Menjalankan server pada port 8080
	log.Println("Server started on port 8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}

func getUsersHandler(w http.ResponseWriter, r *http.Request) {
	// Mengirimkan response dalam format JSON
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

func createUserHandler(w http.ResponseWriter, r *http.Request) {
	// Mendekode request body menjadi struct User
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Menambahkan user ke dalam slice users
	users = append(users, user)

	// Mengirimkan response berhasil
	w.WriteHeader(http.StatusCreated)
}

```

Dalam contoh di atas, kami menggunakan package net/http untuk membuat server dan route handler. Aplikasi ini memiliki dua endpoint /users yang mendukung HTTP GET dan POST. Endpoint GET digunakan untuk mengambil daftar pengguna yang sudah ada, sedangkan endpoint POST digunakan untuk membuat pengguna baru.

Pastikan Anda telah menginstal Go pada mesin Anda sebelum menjalankan contoh di atas. Anda dapat menjalankan aplikasi dengan menggunakan perintah go run pada terminal:

```go
go run namafile.go
```

Setelah menjalankan aplikasi, Anda dapat mengakses endpoint /users menggunakan Postman atau perangkat lunak sejenis untuk mengirimkan permintaan GET dan POST.

# CRUD

```go
package main

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

type User struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

var users []User
var nextID int

func main() {
	// Menginisialisasi router menggunakan Gorilla Mux
	router := mux.NewRouter()

	// Menambahkan handler untuk endpoint '/users'
	router.HandleFunc("/users", getUsersHandler).Methods("GET")

	// Menambahkan handler untuk endpoint '/users/{id}'
	router.HandleFunc("/users/{id}", getUserHandler).Methods("GET")

	// Menambahkan handler untuk endpoint '/users'
	router.HandleFunc("/users", createUserHandler).Methods("POST")

	// Menambahkan handler untuk endpoint '/users/{id}'
	router.HandleFunc("/users/{id}", updateUserHandler).Methods("PUT")

	// Menambahkan handler untuk endpoint '/users/{id}'
	router.HandleFunc("/users/{id}", deleteUserHandler).Methods("DELETE")

	// Menjalankan server pada port 8080
	log.Println("Server started on port 8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}

func getUsersHandler(w http.ResponseWriter, r *http.Request) {
	// Mengirimkan response dalam format JSON
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

func getUserHandler(w http.ResponseWriter, r *http.Request) {
	// Mendapatkan parameter id dari URL
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Mencari pengguna berdasarkan ID
	for _, user := range users {
		if user.ID == id {
			// Mengirimkan response dalam format JSON
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(user)
			return
		}
	}

	// Mengirimkan response 404 jika pengguna tidak ditemukan
	http.NotFound(w, r)
}

func createUserHandler(w http.ResponseWriter, r *http.Request) {
	// Mendekode request body menjadi struct User
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Menambahkan ID baru ke pengguna
	user.ID = nextID
	nextID++

	// Menambahkan pengguna ke dalam slice users
	users = append(users, user)

	// Mengirimkan response berhasil
	w.WriteHeader(http.StatusCreated)
}

func updateUserHandler(w http.ResponseWriter, r *http.Request) {
	// Mendapatkan parameter id dari URL
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Mendekode request body menjadi struct User
	var updatedUser User
	err = json.NewDecoder(r.Body).Decode(&updatedUser)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Mencari pengguna berdasarkan ID
	for i, user := range users {
		if user.ID == id {
			// Mengupdate pengguna yang ditemukan
			users[i].Name = updatedUser.Name
			users[i].Email = updatedUser.Email

			//
```
