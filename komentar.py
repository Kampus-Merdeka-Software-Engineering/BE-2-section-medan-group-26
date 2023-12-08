import requests

def post_comment():
    # URL endpoint tempat Anda ingin mengirim komentar
    url = 'http://localhost:5500/FE/FE-2-section-medan-group-26/berita.html'

    # Data yang ingin Anda kirimkan
    data = {
        'username': '123',
        'comments': 'Ini adalah komentar saya.'
    }

    # Melakukan POST request
    response = requests.post(url, json=data)

    # Menangani respons
    if response.status_code == 200:
        print('Komentar berhasil dikirim!')
    else:
        print(f'Gagal mengirim komentar. Kode status: {response.status_code}')
        print(response.text)

if __name__ == "__main__":
    post_comment()
