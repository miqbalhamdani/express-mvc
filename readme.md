Repository ini, dijelaskan step-step perubahan code, dari chapter 7 dan 8 meliputi:

- [Step Coding](#step-coding)
    - [1. Aplikasi express-js sederhana](#1-aplikasi-express-js-sederhana)
    - [2. Cara membuat design pattern MVC](#2-cara-membuat-design-pattern-mvc)
    - [3. Implementasi authentication menggunakan express-session](#3-implementasi-authentication-menggunakan-express-session)
    - [4. Penggunaan data user, pada passport middleware.](#4-penggunaan-data-user-pada-passport-middleware)
    - [5. Cara menggunakan helper/utils dan env file.](#5-cara-menggunakan-helperutils-dan-env-file)
    - [6. Membuat simple API dengan design pattern MCR](#6-membuat-simple-api-dengan-design-pattern-mcr)
    - [7. Implementasi authentication menggunakna token based (JWT)](#7-implementasi-authentication-menggunakna-token-based-jwt)
    - [8. Implementasi express-ejs-layouts sebagai layout.](#8-implementasi-express-ejs-layouts-sebagai-layout)
    - [(Extra) Implementasi Login Form with JWT](#extra-implementasi-login-form-with-jwt)

> Pada project ini terdapat 2 authentication, pertama menggunakan express-session, dan kedua menggunakan JWT. Penggunaan 2 authentication ini secara berbarengan adalah sebegai contoh. Pada kasus riil nya, biasanya hanya menggunakan 1 authentication, yang mana apabila kita membuat aplikasi Restfull API (backend) maka kita bisa menggunakan JWT. Sedangkan apabila kita membuat apliasi monotilik (backend + frontend) maka authentication nya, kita bisa menggunakan express-session.

## Project setup

1. Clone Repository ini.

    ```bash
    $ git clone git@github.com:miqbalhamdani/todos.git
    ```
2. Masuk ke dalam Repository yang sudah di clone tadi.

    ```bash
    $ cd todos
    ```
3. Kalian bisa pilih mau ke branch yang mana sesuai nama nya. untuk daftar branch nya bisa dilihat [disini](https://github.com/miqbalhamdani/todos/branches/active) dan untuk format nya seperti ini:

    ```bash
    $ git checkout nama_branch
    ```
    Contoh:
    ```bash
    $ git checkout 2-mvc
    # atau
    $ git checkout 4-integrate-todo-with-user
    # atau
    $ git checkout 6-create-api-with-mcr
    ```

    > Apabila kalian pindah branch, jangan lupa untuk lakukan lagi step 4 sampai dengan step 8 dibawah.

4. Install dependencies

    ```bash
    $ npm install
    ```
5. Setup konfigurasi dari sequelize nya, pada file ini [config/config.json](config/config.json).

    ```json
    {
      "development": {
        "username": "miqbal", // di sesuaikan dengan username teman-teman
        "password": null,  // di sesuaikan dengan passowrd teman-teman
        "database": "todo",
        "host": "127.0.0.1",
        "dialect": "postgres"
      },
    }
    ```
6. Membuat database baru

    ```bash
    $ sequelize db:create
    ```
7. Menjalankan migration

    ```bash
    $ sequelize db:migrate
    ```
8.  Terakhir, kita bisa menjalankan project dengan:

    ```bash
    $ npm run start
    ```

# Step Coding

### 1. Aplikasi express-js sederhana

Pada awal chapter 7 kita pernah membuat aplikasi [express game](https://github.com/miqbalhamdani/fsw-19/tree/master/chapter-7/express-game). Berdasarkan dari aplikasi tersebut, saya mencoba untuk membuat nya kemali, dengan lebih sederhana dan dengan data yang lebih sesuai.

Pada aplikasi ini, kita membuat aplikasi todo. Pada aplikasi todo tersebut, kita bisa membuat todo, uncek todo, cek todo, maupun mendelete todo. Pada aplikasi ini juga, kita sudah mengkoneksikan nya menggunakan database (Sequelize + Postgres), dan mengunakan view engine (EJS).

Untuk detail nya bisa dilihat disini:
https://github.com/miqbalhamdani/todos/tree/1-base

### 2. Cara membuat design pattern MVC

Step ke 2 ini, kita akan coba membuat design pattern MVC, melanjutkan dari aplikasi yang kita buat di step sebelum nya atau step 1. Untuk perubahan nya apa saja, bisa dilihat disini:

https://github.com/miqbalhamdani/todos/compare/1-base...2-mvc

Karena kita menggunakan design pattern MVC, yang mana terdiri dari **Model View Controller**, maka terdapat logic yang terdapat di home, kita pindahkan semua ke **Controller**. Seperti:

https://github.com/miqbalhamdani/todos/tree/2-mvc

### 3. Implementasi authentication menggunakan express-session

Pada step 3, kita akan coba implementasi authentication menggunakan session based dengan express-session. Disini kita membuat tabel baru yaitu tabel `User`, lalu menambahkan kolom `UserId` pada tabel `Todo`. Disini juga kita membuat halaman login dan register, dan juga menproteksi halaman Todo supaya hanya bisa di akses ketika sudah login, menggunakan passport middleware. Untuk perubahan nya dari step 2 (penerapan MVC pattern) ke step 3 ini, bisa dilihat disini:

https://github.com/miqbalhamdani/todos/compare/2-mvc...3-authentication-with-session

Dan untuk hasil perubahan nya, bisa di cek dibagian ini:

https://github.com/miqbalhamdani/todos/tree/3-authentication-with-session

### 4. Penggunaan data user, pada passport middleware.

Pada step 3 sebelum nya, kita sudah berhasil membuat halaman login dan memproteksi halaman `Todo`. Selanjut nya pada step ini kita akan setting controller kita, supaya todo yang kita buat itu, bisa berdasarkan user yang login. Jadi tiap user punya todo nya masing-masing. Pada step ini, kita juga membuat dashboard sederhana  (navbar). Untuk apa saja yang dirubah bisa cek disini:

https://github.com/miqbalhamdani/todos/compare/3-authentication-with-session...4-integrate-todo-with-user

Dan untuk detail hasil nya, bisa cek:

https://github.com/miqbalhamdani/todos/tree/4-integrate-todo-with-user

### 5. Cara menggunakan helper/utils dan env file.

Pada step 5 ini, saya coba untuk mempraktekan `helper` atau bisa juga disebut `utils`, yang mana `helper` ini fungsi nya adalah untuk membuat function/method secara global, dimana function ini sering digunakan dan bisa di panggil dimana saja. Contoh nya seperti format tanggal, format rupiah, dsb. Disini kita juga coba implementasikan env (environment), env ini biasanya berisi key rahasia seperti google analityc key, jwt key, user dan password database, atau data penting lain nya. Apa saja perubahan nya, bisa di cek disini:

https://github.com/miqbalhamdani/todos/compare/4-integrate-todo-with-user...5-create-helper-and-setup-env

Untuk detail keseluruhan nya bisa di cek disini:

https://github.com/miqbalhamdani/todos/tree/5-create-helper-and-setup-env

### 6. Membuat simple API dengan design pattern MCR

Pada chapter 6, karena kita ingin membuat API dari data sebelum nya, yaitu todo. Kita tidak perlu lagi membuat `model` dan `migration` nya, karena kita melanjutkan dari yang sebelum nya. API yang kita buat menggunakan design pattern MCR (Model Controller Router), dimana ini mirip dengan design pattern MVC tetapi karena ini merupakan API maka, tidak ada `View` tetapi ada nya `Router`. API disini juga cuma dibuat 2 enpoint yaitu untuk dapatkan list todo secara keseluruhan dan list todo berdasarkan user tertentu. Apa saja sih yang harus di tambahkan ketika kita membuat API, bisa di cek:

https://github.com/miqbalhamdani/todos/compare/5-create-helper-and-setup-env...6-create-api-with-mcr

Sedangkan untuk kode keseluruhan, bisa di cek disini:

https://github.com/miqbalhamdani/todos/tree/6-create-api-with-mcr

### 7. Implementasi authentication menggunakna token based (JWT)

Karena di step sebelum nya (step 6), kita sudah membuat API. Maka di step 7 ini, kita coba untuk memberikan authentication juga, authentication disini berarti kita memberikan authentication pada sebuah API, yang mana disini kita menggunakan JWT.
Tidak hanya menggunakan authentication, tapi disini kita juga memproteksi seluruh API URL yang telah kita buat pada step 6. bisa di cek:

https://github.com/miqbalhamdani/todos/compare/6-create-api-with-mcr...7-setting-authentication-api-with-jwt

Sedangkan untuk kode keseluruhan, bisa di cek disini:

https://github.com/miqbalhamdani/todos/tree/7-setting-authentication-api-with-jwt

### 8. Implementasi express-ejs-layouts sebagai layout.

Terakhir, untuk mempermudah dan mempercepat development kita, khusus nya saat membuat dashboard, kita coba implementasi express-ejs-layouts. Konsep dari layout disini yang mana kita buat kerangka, dimana kerangka tersebut biasanya terdiri dari HTML, head, script, yang nanti nya di dalam kerangka tersebut bisa kita masukan content, yang mana content inilah yang nanti nya akan berubah-ubah, sesuai dengan halaman yang kita load. Disini kita membuat 2 layout, 1 adalah `layouts/auth` ini digunakan untuk halaman login dan register, sedngkan 2 adalah `layouts/default` yang mana layout ini digunakan sebagai layout untuk dashboard dengan tambahan navbar. Apabila kita ingin mencoba meng implementasikan `express-ejs-layouts` kita juga harus merubah tampilan yang sudah ada, menjadi seperti ini kira-kria:

https://github.com/miqbalhamdani/todos/compare/7-setting-authentication-api-with-jwt...8-implement-express-ejs-layouts

Sedangkan untuk kode keseluruhan, bisa di cek disini:

https://github.com/miqbalhamdani/todos/tree/8-implement-express-ejs-layouts

### (Extra) Implementasi Login Form with JWT

JWT biasanya digunakan pada aplikasi backend saja (microservices). Jadi untuk implementasi nya kita juga harus menyiapkan aplikasi frontend nya. Backend disini berarti menggunakan API, yang mana bisa kita analogi kan bahwa controller, model, dan router disini itu sebagai `backend` kita, sedangkan vier merupakan `frontend` kita. Jadi disini frontend kita yaitu view, tidak terkait sama sekali dengan backend / tidak bisa langsung akses ke bagian controller. Oleh karena itu dibagaina `frontend / iew` kita menggunakan ajax request, untuk akses data ke backend, via API itu sendiri.

Untuk konsep nya kira-kira seperti ini:
1. Untuk cek apakah sudah login atau belum itu berdasarkan token, yang mana token ini di simpan di cookie. Jadi kalo di cookie browser kita terdapat token, berarti aplikasi kita sudah login.
2. Saat belum login, token kita masih kosong. Dan saat proses login berhasil, kita baru menyimpan token tadi di cookie browser kita.
3. Token ini juga fungsi nya untuk membuka proteksi ke API, karena yang sudah kita implementasikan di step 7 sebelum nya. bahwa data `todo` tadi sudah di proteksi menggunakan JWT. Jadi token ini digunakan sebagai kunci, untuk membuaka data `todo` tadi.

Untuk detail perubahan bisa cek di:

https://github.com/miqbalhamdani/todos/compare/7-setting-authentication-api-with-jwt...8-implement-express-ejs-layouts

Sedangkan untuk detail kode keseluruhan, bisa di cek disini:

https://github.com/miqbalhamdani/todos/tree/9-implement-login-form-with-jwt
