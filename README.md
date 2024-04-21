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

## Получение информации о канале (камеры)
URL - `https://api.cyxym.net/bigbrother/v1?cams.stream`
Метод - `POST`

Data:
    channel = str,
    ip = str

Пример ответа:
```
{
    "response": {
        "link": "https://public.apsny.camera/psou_1/",
        "channel": "psou_1",
        "preview": "https://apsny.camera/img/camera/psou_1/preview.jpg",
        "favorite": false,
        "token": "d9286ee83db153aef4b6e18e8fa3f1432053341a-2e31cc8d60afd1f4363bfb68200a8227-1713706225-1713695425",
        "timelapse": true,
        "ip": "185.228.135.250",
        "cam": {
            "camera_name": "Псоу - Въезд на КПП (из Абхазии)",
            "camera_text": "<p>Камера установлена на КПП \"Псоу\".</p>\n<p>Въезд на таможенный терминал со стороны Республики Абхазия.</p>\n<p>Выражаем благодарность ГТК Республики Абхазия за содействие в установке камеры.</p>\n<p>Официальный сайт ГТК РА: <a href=\"http://www.customsra.com/\" class=\"content_a\" title=\"ГТК РА\" target=\"_blank\">www.customsra.com</a></p>",
            "users_count": 5,
            "timelapse_support": 1
        },
        "weather": {
            "now": 1713690002,
            "now_dt": "2024-04-21T09:00:02.193196Z",
            "info": {
                "url": "https://yandex.ru/pogoda/105957?lat=43.393651&lon=40.011153",
                "lat": 43.393651,
                "lon": 40.011153
            },
            "fact": {
                "obs_time": 1713688200,
                "temp": 18,
                "feels_like": 14,
                "temp_water": 16,
                "icon": "bkn_-ra_d",
                "condition": "light-rain",
                "wind_speed": 8,
                "wind_dir": "w",
                "pressure_mm": 759,
                "pressure_pa": 1011,
                "humidity": 72,
                "daytime": "d",
                "polar": false,
                "season": "spring",
                "wind_gust": 12.4
            },
            "forecast": {
                "date": "2024-04-21",
                "date_ts": 1713646800,
                "week": 16,
                "sunrise": "05:27",
                "sunset": "19:09",
                "moon_code": 15,
                "moon_text": "moon-code-15",
                "parts": [
                    {
                        "part_name": "evening",
                        "temp_min": 15,
                        "temp_avg": 17,
                        "temp_max": 18,
                        "temp_water": 16,
                        "wind_speed": 4.3,
                        "wind_gust": 9.8,
                        "wind_dir": "nw",
                        "pressure_mm": 763,
                        "pressure_pa": 1016,
                        "humidity": 73,
                        "prec_mm": 0,
                        "prec_prob": 0,
                        "prec_period": 240,
                        "icon": "bkn_n",
                        "condition": "cloudy",
                        "feels_like": 15,
                        "daytime": "n",
                        "polar": false
                    },
                    {
                        "part_name": "night",
                        "temp_min": 12,
                        "temp_avg": 13,
                        "temp_max": 14,
                        "temp_water": 16,
                        "wind_speed": 2.5,
                        "wind_gust": 4.6,
                        "wind_dir": "n",
                        "pressure_mm": 763,
                        "pressure_pa": 1017,
                        "humidity": 77,
                        "prec_mm": 0,
                        "prec_prob": 0,
                        "prec_period": 480,
                        "icon": "skc_n",
                        "condition": "clear",
                        "feels_like": 11,
                        "daytime": "n",
                        "polar": false
                    }
                ]
            }
        }
    }
}
```

Пример кода:
```python
def get_stream_info(channel: str, ip: str) -> dict:
    """
    Получение информации о канале (камеры)

    Param:
        channel: str - Название камеры
        ip: str - IP
    """
    response = requests.post(
        'https://api.cyxym.net/bigbrother/v1?cams.stream',
        data = {
            'channel': channel,
            'ip': ip
        }
    )

    return response.json()
```
