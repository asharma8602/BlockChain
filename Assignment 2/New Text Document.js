//Just wanted to add a note , this code seems perfectly fine to me , but i am not able to get why this code is not running , please do comment on the mistakes you find in the way the assignment is submitted , so that i can understand from my mistakes , and will help me further improve the my concepts .
//Sorry for submitting incomplete assignment , but i didn't want to keep the habit of not submitting assignment.

const crypto = require("crypto")
const { publicDecrypt, publicEncrypt } = require("node:crypto")
const { privatekey, publickey } = crypto.generateKeyPairSync("rsa", { modulusLength: 2048, })

const data = "This is Confidential"

const encryptedData = publicEncrypt({
    key: publickey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
},
    Buffer.from(data)
)

console.log("encypted data: ", encryptedData.toString("base64"))
const decryptedData = publicDecrypt({
    key: privatekey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
},
    encryptedData
)

console.log("decrypted data: ", decryptedData.toString())

//sample data to be signed 
const verifiableData = "Oh you found that"

const signature = crypto.sign("sha256", Buffer.from(verifiableData), {
    key: privatekey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
})

console.log(signature.toString("base64"))

const isVerified = crypto.verify(
	"sha256",
	Buffer.from(verifiableData),
	{
		key: publicKey,
		padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
	},
	signature
)

console.log("signature verified: ", isVerified)