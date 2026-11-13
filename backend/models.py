from dataclasses import dataclass
from datetime import datetime

@dataclass
class Product:
    id: int
    name: str
    price: float
    stock: int
    created_at: datetime = datetime.now()

    def apply_discount(self, percentage: float) -> float:
        return round(self.price * (1 - percentage / 100), 2)

    def is_available(self) -> bool:
        return self.stock > 0
