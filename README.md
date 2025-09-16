# Irys CLI

A simple CLI tool to upload **files, folders, or text strings** to [Irys](https://irys.xyz), with **auto-funding support**.

---

## ✨ Features
- Upload **files** (`irys-upload ./file.txt`)
- Upload **folders** (`irys-upload ./my-folder`)
- Upload **text** (`irys-upload "Hello Irys"`)
- Auto-funds your account if balance is too low
- Works with **Ethereum Sepolia testnet**

---

## 🚀 Installation

1. Clone the repo:

```bash
git clone https://github.com/YOUR_USERNAME/irys-cli.git
cd irys-cli
npm install
```

2. Link the CLI command:
```
npm link
```

---

## 🔑 Setup Environment

3. Create a .env file in the project root and add your Sepolia testnet private key:
```
PRIVATE_KEY=<your-private-key-here>
```

---

## ⚠️ Important:
* Your wallet must have Sepolia ETH for funding.
* You can get free ETH from [Sepolia Faucet](https://sepolia-faucet.pk910.de/)

4. Now you can use irys-upload:
```
irys-upload ./folder/text.txt
```

---

## 📦 Usage Examples

Upload a file:
```
irys-upload ./folder/text.txt
```

Upload a folder:
```
irys-upload ./folder
```

Upload a text string:
```
irys-upload "Hello from Irys!"
```

---

## 🛠 How It Works

- Uses the Irys SDK to connect to the Sepolia testnet bundler.
- Checks your Irys balance automatically.
- If balance < cost of upload, it will auto-fund from your wallet.
- Outputs a permanent URL to access your data:
```bash
https://gateway.irys.xyz/<upload-id>
```

---

## 🤝 Contributing
PRs are welcome! If you find issues, please open one in the repo.