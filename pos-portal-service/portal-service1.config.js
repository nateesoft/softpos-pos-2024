module.exports = {
    apps: [{
      name: "portal-service-1",
      script: "pos-portal-service/bin/www",
      env: {
        PORT:9091,
        NODE_ENV:"production",
        CONVERT_LATIN_UTF:"Y",
        IS_OLD_MYSQL5:"N",
        MYSQL5_DB_HOST:"127.0.0.1",
        MYSQL5_DB_NAME:"MyRestaurant",
        MYSQL5_DB_USER:"root",
        MYSQL5_DB_PASSWORD:"nathee2024",
        MYSQL5_DB_PORT:"3306",
        IS_OLD_MYSQL5_CRM:"N",
        MYSQL5_CRM_DB_HOST:"127.0.0.1",
        MYSQL5_CRM_DB_NAME:"mycrmbranch",
        MYSQL5_CRM_DB_USER:"root",
        MYSQL5_CRM_DB_PASSWORD:"nathee2024",
        MYSQL5_CRM_DB_PORT:"3306",
        DB_HOST:"127.0.0.1",
        DB_NAME:"posdb",
        DB_USER:"root",
        DB_PASSWORD:"nathee2024",
        DB_PORT:"3306",
        WEB_USER_AUTH:"admin",
        WEB_USER_PASS:"supersecret",
        API_SECRET_PASS:"XkhZG4fW2t2W",
        BOOKING_API_HOST:"https://demo17.demodigihypedesign.com/wp-json",
        BOOKING_API_KEY:"ck_9774d4bd980494bd81409edf64581b010b688232",
        BOOKING_API_SECRET:"cs_b518af0e51df821a40ecc7a51e573af621b0d2d3",
        SOCKETIO_SERVER:"http://127.0.0.1:8081"
      }
    }]
  }