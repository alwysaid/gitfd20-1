



/**
 * 
 * MIDDLEWARE
 * 
 * posisi = sebelum response, setelah request
 * 
 * request -> middleware -> handler -> response
 * 
 * yg bisa diimplement = Route level Middleware, Third Party Middleware, Error Handling Middleware
 * 
 * pas di handler, harus masukin next . next artinya bisa lanjut ke response
 * 
 * tahapan implement =
 * 
 * bikin file app.js
 * npm init -y
 * nodemon app.js
 * npm i express
 * buat require express dan listen
 * buat test case untuk cek server
 * setelah dipastikan nyala, buat middleware.
 * posisi middleware ada di bagian app.listen setelah port
 * 
 * test implement built ini middleware:
 *      expreesjs.com => api reference 4x => request
 *              app.use(express.json()) // for parsing application/json
 *              app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
 *              (middleware built in middleware )
 * 
 * test implement route level middleware
 * 
 * third party : ex morgan
 * 
 * error handling : dipakai ketika respons statusnya bukan success
 * 
 * cara manfaatinnya dengan callbacn
 * 
 * 
 */