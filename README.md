# SystemUtilis
Утилиты

# API Docs

## Получение всех локаций
URL - `https://api.cyxym.net/bigbrother/v1?locations.get`
Метод - `POST`

Data - None

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
    response = requests.post(
        'https://api.cyxym.net/bigbrother/v1?locations.get'
    )

    return response.json()
```
