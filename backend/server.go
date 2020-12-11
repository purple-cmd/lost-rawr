package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/pets", petsHandler).Methods("GET")

	log.Fatal(http.ListenAndServe(":5000", handlers.CORS()(r)))
}

func petsHandler(w http.ResponseWriter, r *http.Request) {
	params := r.URL.Query()

	offsetP := params.Get("offset")
	pageSizeP := params.Get("pageSize")

	offset := 0
	pageSize := 5
	if offsetP != "" && pageSizeP != "" {
		offset, _ = strconv.Atoi(offsetP)
		pageSize, _ = strconv.Atoi(pageSizeP)
	}

	file, err := ioutil.ReadFile("./pets.json")
	if err != nil {
		fmt.Println("error", err)
	}

	var data []interface{}
	err = json.Unmarshal(file, &data)
	if err != nil {
		fmt.Println("error", err)
	}
	json.NewEncoder(w).Encode(data[offset : offset+pageSize])

	w.Header().Set("Content-Type", "application/json")
	// w.Write(file[offset:pageSize])
}

// func toJson() {
// 	var data []interface{}
// 	err = json.Unmarshal(file, &data)
// 	if err != nil {
// 		fmt.Println("error", err)
// 	}
// json.NewEncoder(w).Encode(data[0:5])
// }
