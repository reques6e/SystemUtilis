import requests

def get_camera_steam(camera: str) -> str:
    response = requests.post(
        'https://api.cyxym.net/bigbrother/v1?cams.stream',
        data = {
            'channel': camera,
            'ip': '1.1.1.1'
        }
    )
    data = response.json()

    if 'response' in data:
        return f'https://apsny.camera/player/?stream={camera}&token={data["response"]["token"]}'
    elif 'error' in data and data['error']['code'] == 'ITEM_NOT_FOUND':
        return f'Камера {camera} не найдена'
    else:
        return 'Неизвестный ответ или ошибка в данных'

if __name__ == '__main__':
    camera = str(input('Введите название камеры: '))
    print(get_camera_steam(camera))
