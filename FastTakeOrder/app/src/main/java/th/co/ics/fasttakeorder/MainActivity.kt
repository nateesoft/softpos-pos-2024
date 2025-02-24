package th.co.ics.fasttakeorder

import android.content.Intent
import android.content.SharedPreferences
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Button

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private lateinit var settingsButton: Button
    private lateinit var sharedPreferences: SharedPreferences
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)
        settingsButton = findViewById(R.id.settingsButton)

        sharedPreferences = getSharedPreferences("WebViewAppPrefs", MODE_PRIVATE)
        val savedUrl = sharedPreferences.getString("saved_url", "") ?: ""

        val webSettings: WebSettings = webView.settings
        webSettings.javaScriptEnabled = true
        webSettings.domStorageEnabled = true
        webSettings.databaseEnabled = true
        webSettings.allowFileAccess = true
        webSettings.allowContentAccess = true

        webView.webViewClient = WebViewClient()
        webView.loadUrl(savedUrl)

        settingsButton.setOnClickListener {
            startActivity(Intent(this, SettingsActivity::class.java))
        }
    }
}