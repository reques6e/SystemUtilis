# SystemUtilis
Утилиты

# API Docs

## Получение всех локаций
URL - `https://api.cyxym.net/bigbrother/v1?locations.get`
Метод - `POST`

Data:
    None

Пример ответа:
```
{
    "response": [
        {
            "location_id": 1,
            "location_name": "Сухум"
        },
        {
            "location_id": 2,
            "location_name": "Псоу"
        },
        {
            "location_id": 3,
            "location_name": "Гагра"
        },
        {
            "location_id": 4,
            "location_name": "Афон"
        },
        {
            "location_id": 5,
            "location_name": "Гал"
        },
        {
            "location_id": 6,
            "location_name": "Рица"
        },
        {
            "location_id": 7,
            "location_name": "Пицунда"
        },
        {
            "location_id": 8,
            "location_name": "Гудаута"
        },
        {
            "location_id": 9,
            "location_name": "Очамчира"
        },
        {
            "location_id": 10,
            "location_name": "Агудзера"
        }
    ]
}
```

Пример кода:
```python
import requests

def get_locations() -> dict:
    """
    Получение всех локаций 
    """
    response = requests.post(
        'https://api.cyxym.net/bigbrother/v1?locations.get'
    )

    return response.json()
```

## Получение камер по локации
URL - `https://api.cyxym.net/bigbrother/v2?cams.get`
Метод - `POST`

Data:
    lid = int

Пример ответа:
```
{
    "response": {
        "cams": [
            {
                "id": 49,
                "channel": "gudauta_lyhnenskiy_povorot",
                "name": "Гудаута - Лыхненский поворот",
                "preview": "https://apsny.camera/img/camera/gudauta_lyhnenskiy_povorot/preview.jpg",
                "location": 8,
                "clients": 6
            },
            {
                "id": 51,
                "channel": "gudauta_prospekt_geroev",
                "name": "Гудаута - Проспект Героев",
                "preview": "https://apsny.camera/img/camera/gudauta_prospekt_geroev/preview.jpg",
                "location": 8,
                "clients": 8
            },
            {
                "id": 57,
                "channel": "gudauta_park",
                "name": "Гудаута - Парк Гуда и Ута",
                "preview": "https://apsny.camera/img/camera/gudauta_park/preview.jpg",
                "location": 8,
                "clients": 5
            },
            {
                "id": 110,
                "channel": "gudauta_vokzal",
                "name": "Гудаута - вокзал",
                "preview": "https://apsny.camera/img/camera/gudauta_vokzal/preview.jpg",
                "location": 8,
                "clients": 3
            },
            {
                "id": 111,
                "channel": "gudauta_post_bambora",
                "name": "Пост ГАИ - Бамбора",
                "preview": "https://apsny.camera/img/camera/gudauta_post_bambora/preview.jpg",
                "location": 8,
                "clients": 3
            },
            {
                "id": 112,
                "channel": "gudauta_chachba_ochamchyrskaya",
                "name": "Гудаута - пересечение ул. Чачба и Очамчирская",
                "preview": "https://apsny.camera/img/camera/gudauta_chachba_ochamchyrskaya/preview.jpg",
                "location": 8,
                "clients": 3
            },
            {
                "id": 216,
                "channel": "lyhnashta_1",
                "name": "Лыхнашта",
                "preview": "https://apsny.camera/img/camera/lyhnashta_1/preview.jpg",
                "location": 8,
                "clients": 2
            }
        ],
        "count": 7,
        "users": 664
    }
}
```

Пример кода:
```python
def get_camera(lid: int) -> dict:
    """
    Получение камер по локации

    Param:
        lid: int - ID локации
    """
    response = requests.post(
        'https://api.cyxym.net/bigbrother/v2?cams.get',
        data = {
            'lid': lid
        }
    )

    return response.json()
```

## Получение TimeLapse
URL - `https://api.cyxym.net/bigbrother/v1?cams.timelapse`
Метод - `POST`

Data:
    channel = str

Пример ответа:
```
{
    "response": {
        "link": "https://apsny.camera/video/psou_1_2024-04-20.mp4"
    }
}
```

Пример кода:
```python
def get_timelapse(channel: str) -> dict:
    """
    Получение Timelapse с камер

    Param:
        channel: str - Название камеры
    """
    response = requests.post(
        'https://api.cyxym.net/bigbrother/v1?cams.timelapse',
        data = {
            'channel': channel
        }
    )

    return response.json()
```
