package th.co.ics.fasttakeorder

import android.content.Intent
import android.content.SharedPreferences
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity

class SettingsActivity : AppCompatActivity() {
    private lateinit var urlInput: EditText
    private lateinit var saveButton: Button
    private lateinit var sharedPreferences: SharedPreferences

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_settings)

        urlInput = findViewById(R.id.urlInput)
        saveButton = findViewById(R.id.saveButton)

        sharedPreferences = getSharedPreferences("WebViewAppPrefs", MODE_PRIVATE)
        urlInput.setText(sharedPreferences.getString("saved_url", ""))

        saveButton.setOnClickListener {
            val url = urlInput.text.toString()
            sharedPreferences.edit().putString("saved_url", url).apply()

            startActivity(Intent(this, MainActivity::class.java))
            finish()
        }
    }
}