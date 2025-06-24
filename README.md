# DTG-WEB
Setup Website using Cloudflare and Nginx full (strict):

# Step 1 — Generating an Origin CA TLS Certificate

---

1) To generate a certificate with Origin CA, log in to your Cloudflare account in a web browser. Select the domain that you want to secure and navigate to the SSL/TLS section of your Cloudflare dashboard. From there, navigate to the Origin Server tab and click on the Create Certificate
2) Copy Origin Certificate and Private key --> Save to your origin server
3) On your server:
# Copy Origin Certificat to file:
```shell
$ sudo nano /etc/ssl/cert.pem
```
# Copy Private Key to file:
```shell
$ sudo nano /etc/ssl/key.pem
```
---
