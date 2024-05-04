# API Docs
Не включено в док:
https://api.cyxym.net/app/v1?chat
https://api.cyxym.net/app/v1?account.sendSMS

## Получение всех локаций
`POST` - `https://api.cyxym.net/bigbrother/v1?locations.get`

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
`POST` - `https://api.cyxym.net/bigbrother/v2?cams.get`

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
`POST` - `https://api.cyxym.net/bigbrother/v1?cams.timelapse`

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
`POST` - `https://api.cyxym.net/bigbrother/v1?cams.stream`

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

## Создание счёта на оплату
`POST` - `https://api.cyxym.net/pay/v1?init`

Пример ответа:
```
{
    "response": {
        "id": "2db70ac0-000f-5000-a000-191a8ccff769",
        "status": "pending",
        "recipient": {
            "account_id": "636554",
            "gateway_id": "1619655"
        },
        "amount": {
            "value": "500.20",
            "currency": "RUB"
        },
        "description": "1",
        "payment_method": {
            "type": "bank_card",
            "id": "2db70ac0-000f-5000-a000-191a8ccff769",
            "saved": false
        },
        "created_at": "2024-04-21T11:22:40.680+00:00",
        "confirmation": {
            "enforce": false,
            "return_url": "https://cyxym.net",
            "confirmation_url": "https://yoomoney.ru/checkout/payments/v2/contract?orderId=2db70ac0-000f-5000-a000-191a8ccff769",
            "type": "redirect"
        },
        "paid": false,
        "refundable": false,
        "transfers": []
    }
}
```

Пример кода:
```python
def create_invoice(id: int, amount: float) -> dict:
    """
    Создание счёта на оплату

    Param:
        id: int - Лицевой счёт (ID)
        amount: float - Сумма
    """
    response = requests.post(
        'https://api.cyxym.net/pay/v1?init',
        data = {
            'id': id,
            'amount': amount
        }
    )

    return response.json()
```

## Вход в личный кабинет
`POST` - `https://api.cyxym.net/app/v1?auth`

Пример ответа:
```
{
    "response": {
        "status": true,
        "auth": true,
        "token": ".....",
        "password_changed": true
    }
}
```

Пример кода:
```python
def auth_by_password(id: int, password: str) -> dict:
    """
    Вход в личный кабинет

    Param:
        id: int - Лицевой счёт (ID)
        password: str - Пароль
    """
    response = requests.post(
        'https://api.cyxym.net/app/v1?auth',
        data = {
            'id': id,
            'password': password
        }
    )

    return response.json()
```

## Активировать обещанный платёж
`POST` - `https://api.cyxym.net/app/v1?pay.temp`

Пример ответа:
```
{
    "response": {
        "status": true,
        "data": {
            "response": {
                "result": "0",
                "message": "Обещанный платеж успешно активирован"
            }
        }
    }
}
```

Пример кода:
```python
def promised_payment(id: int, token: str) -> dict:
    """
    Активировать обещанный платёж

    Param:
        id: int - Лицевой счёт (ID)
        token: str - Токен
    """
    response = requests.post(
        'https://api.cyxym.net/app/v1?pay.temp',
        data = {
            'id': id,
            'token': token
        }
    )

    return response.json()
```

## Получение информации о типе подключения и статуса устройства
`POST` - `https://api.cyxym.net/app/v1?account.link`

Пример ответа:
```
{
    "response": {
        "status": true,
        "data": {
            "ont_rx_power": "-26.02",
            "olt_rx_power": "-27.22",
            "ont_last_seen": {
                "last_uptime": "2024-04-20 06:59:19",
                "last_downtime": "2024-04-20 04:59:16",
                "last_dying_gasp_time": "2024-04-20 04:59:16"
            },
            "ont_status": "online",
            "ont_state": "13",
            "uptime": "1 день, 8 часов, 26 минут, 19 секунд",
            "ont_model": "Huawei HG8310M (однопортовая bridge)",
            "type": "gpon"
        }
    }
}
```

Пример кода:
```python
def get_connect_info(id: int, token: str) -> dict:
    """
    Получение информации о типе подключения и статуса устройства

    Param:
        id: int - Лицевой счёт (ID)
        token: str - Токен
    """
    response = requests.post(
        'https://api.cyxym.net/app/v1?account.link',
        data = {
            'id': id,
            'token': token
        }
    )

    return response.json()
```

## Получение информации о профиле
`POST` - `https://api.cyxym.net/app/v1?account`

Пример ответа:
```
{
    "response": {
        "status": true,
        "data": {
            "address": "Гудаутский р-н, г. Гудаута, ул. ?, д. ?",
            "id": "2020202020",
            "tariff": "Домашний 160 (1300 руб./мес.)",
            "contract": "А-20/0000 от 13.12.2013",
            "state": "Услуга оказывается",
            "balance": 4832,
            "price": 1300,
            "alllllwerwe": "0",
            "temp_pay_allowed": false,
            "rec_pay": 0,
            "last_pay": "01.01.2024",
            "last_pay_sum": "1300",
            "fullname": "Медведев Александр Сергеевич",
            "private_cams_status": false,
            "is_locked": false,
            "new_messages": false,
            "password_changed": true,
            "phone": "79409999999"
        }
    }
}
```

Пример кода:
```python
def get_profile_user(id: int, token: str) -> dict:
    """
    Получение информации о профиле

    Param:
        id: int - Лицевой счёт (ID)
        token: str - Токен
    """
    response = requests.post(
        'https://api.cyxym.net/app/v1?account',
        data = {
            'id': id,
            'token': token
        }
    )

    return response.json()
```

## Вход в личный кабинет по номеру телефона и id
`POST` - `https://api.cyxym.net/app/v1?auth.byPhone`

Пример ответа:
```
{
    "response": {
        "status": true,
        "auth": true,
        "token": "____",
        "password_changed": false
    }
}
```

Пример кода:
```python
def auth_by_phone(id: int, phone: str) -> dict:
    """
    Вход в личный кабинет по номеру телефона и id

    Param:
        phone: int - Номер телефона
        id: str - Лицевой счёт (ID)
    """
    response = requests.post(
        'https://api.cyxym.net/app/v1?auth.byPhone',
        data = {
            'phone': phone,
            'id': id
        }
    )

    return response.json()
```

## Получения списка платежей 
`POST` - `https://api.cyxym.net/app/v1?pay.list`

Пример ответа:
```
{
    "response": {
        "status": true,
        "data": [
            {
                "n_line_no": "8",
                "dt_oper": "21.04.2024 15:16",
                "d_oper": "21.04.24",
                "v_description": "Установка временного кредита (Вручную)",
                "v_sum": null
            },
            {
                "n_line_no": "7",
                "dt_oper": "21.04.2024 15:16",
                "d_oper": "21.04.24",
                "v_description": "Закрытие временного кредита (Вручную)",
                "v_sum": null
            },
            {
                "n_line_no": "6",
                "dt_oper": "21.04.2024 15:15",
                "d_oper": "21.04.24",
                "v_description": "Установка временного кредита (Вручную)",
                "v_sum": null
            },
            {
                "n_line_no": "5",
                "dt_oper": "21.04.2024 15:15",
                "d_oper": "21.04.24",
                "v_description": "Закрытие временного кредита (Вручную)",
                "v_sum": null
            },
            {
                "n_line_no": "4",
                "dt_oper": "21.04.2024 15:14",
                "d_oper": "21.04.24",
                "v_description": "Установка временного кредита (Вручную)",
                "v_sum": null
            },
            {
                "n_line_no": "3",
                "dt_oper": "21.04.2024 00:00",
                "d_oper": "21.04.24",
                "v_description": "Абон. плата Домашний 160",
                "v_sum": "-43,33"
            },
            {
                "n_line_no": "2",
                "dt_oper": "20.04.2024 00:00",
                "d_oper": "20.04.24",
                "v_description": "Абон. плата Домашний 160",
                "v_sum": "-43,33"
            }
        ]
    }
}
```

Пример кода:
```python
def get_pay_list(id: int, token: str, from_: str, to: str, payment: int, writeoff: int, overdraft: int) -> dict:
    """
    Получения списка платежей 

    Param:
        id: str - Лицевой счёт (ID)
        token: str - Токен
        from: str - С какого числа вывести список платежей
        to: str - По какое число вывести список платежей
        payment: int - Вывести платежи
        writeoff: int - Вывести списания
        overdraft: int - Кредитный лимит
    """
    response = requests.post(
        'https://api.cyxym.net/app/v1?pay.list',
        data = {
            'id': id,
            'token': token,
            'from': from_,
            'to': to,
            'payment': payment,
            'writeoff': writeoff,
            'overdraft': overdraft
        }
    )

    return response.json()
```

## Отправка кода (смс) для сброса пароля
`POST` - `https://api.cyxym.net/app/v1?account.sendSMS`

Пример ответа:
```
{
    "response": {
        "status": true,
        "phone": "79*****9999"
    }
}
```

Пример кода:
```python
def send_sms(id: int, token: str) -> dict:
    """
    Отправка кода (смс) для сброса пароля

    Param:
        phone: int - Номер телефона
        id: str - Лицевой счёт (ID)
    """
    response = requests.post(
        'https://api.cyxym.net/app/v1?account.sendSMS',
        data = {
            'id': id,
            'token': token
        }
    )

    return response.json()
```
