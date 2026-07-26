# Appointment form setup

The site includes a client-side appointment request form on every public page. It is intentionally honest about its connection state: this static build does not include a server, database, email credential, or payment integration.

To connect submissions, define `window.US_AUTOS_FORM_ENDPOINT` before `js/main.js` loads:

```html
<script>
  window.US_AUTOS_FORM_ENDPOINT = 'https://your-form-endpoint.example/appointments';
</script>
<script src="js/main.js"></script>
```

The endpoint must accept a `POST` request with `Content-Type: application/json`, accept the form fields as JSON, and return a 2xx response on success. Configure notification, spam protection, retention, and access controls in that endpoint; do not put private API keys in these HTML files.

Without an endpoint, the form validates the visitor's information and directs them to call `(754) 223-5452` for confirmation.
