import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Вязаная шапка \"Уют\"",
      price: "1 200 ₽",
      image: "/img/a8ae05c9-03f7-4d9a-a748-80e86f02f567.jpg",
      category: "Шапки",
      description: "Теплая шапка из натуральной шерсти с узором косы"
    },
    {
      id: 2,
      name: "Шарф \"Винтаж\"",
      price: "2 800 ₽",
      image: "/img/5231793e-8eb8-43ed-9e40-5c86f0ed4f39.jpg",
      category: "Шарфы",
      description: "Классический шарф в винтажном стиле"
    },
    {
      id: 3,
      name: "Варежки \"Тепло\"",
      price: "900 ₽",
      image: "/img/daac6807-f7ec-4f5f-a862-b7a2d6f2d2d2.jpg",
      category: "Варежки",
      description: "Уютные варежки ручной работы"
    }
  ];

  const categories = [
    { name: "Шапки", icon: "Crown", count: 12 },
    { name: "Шарфы", icon: "Waves", count: 8 },
    { name: "Варежки", icon: "Hand", count: 15 },
    { name: "Носки", icon: "Footprints", count: 10 }
  ];

  return (
    <div className="min-h-screen bg-background font-serif">
      {/* Header */}
      <header className="bg-white border-b border-secondary">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🧶</div>
              <h1 className="text-2xl font-bold text-primary">32 Пары</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Корзина</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" size="sm">
              <Icon name="ShoppingBag" size={16} />
              <span className="ml-2">0</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Вязанные аксессуары ручной работы
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создаем уютные и теплые изделия с душой. Каждый аксессуар — это история, 
            рассказанная нитями и любовью к ремеслу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Icon name="Heart" size={20} className="mr-2" />
              О нашей работе
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">Категории товаров</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon name={category.icon} size={24} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{category.name}</h4>
                  <Badge variant="secondary">{category.count} товаров</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="catalog" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">Популярные товары</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">{product.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button>
                      <Icon name="Plus" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Показать все товары
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-primary mb-8">Почему выбирают нас?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-lg">Ручная работа</h4>
                <p className="text-muted-foreground">
                  Каждое изделие создается вручную с особым вниманием к деталям
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Leaf" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-lg">Натуральные материалы</h4>
                <p className="text-muted-foreground">
                  Используем только качественную натуральную пряжу
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Truck" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-lg">Быстрая доставка</h4>
                <p className="text-muted-foreground">
                  Доставляем по всей России в кратчайшие сроки
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="text-2xl">🧶</div>
              <h5 className="text-xl font-bold">32 Пары</h5>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Магазин вязанных аксессуаров ручной работы
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-secondary transition-colors">Главная</a>
              <a href="#" className="hover:text-secondary transition-colors">Каталог</a>
              <a href="#" className="hover:text-secondary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;