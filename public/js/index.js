list_colors = ['white']
list_text = ['Спорт','Киберспорт','Концерты','Фестивали','Конференции','Городские праздники',
        'Церемонии','Шоу','Модные показы','Корпоративные мероприятия','Спектакли',
        'Презентации','Свадьбы','Тимбилдинг','Перфомансы','Конгрессы','Парламентские слушания',
        'Заседания органов власти','Салюты','Массовые мероприятия','Выездные студии',
        'Торжественные мероприятия','Видеомосты','Научные опыты','Мастер-классы','Выставки',
        'Конкурсы','Закрытые частные показы'];
len_text = list_text.length;
len_colors = list_colors.length;
list_final = []
var h = $('#section-animation').height();
var w = $('#section-animation').width();
function go() {
    random_text = list_text[Math.floor(Math.random() * (len_text) + 1)];
    random_color = list_colors[Math.floor(Math.random() * (len_colors))];
    random_width = Math.floor(Math.random(w) * 1050) + 150 + "px"
    random_height = (Math.floor(Math.random(h) * 1000) / 2) + 50 + "px"
    if (random_height > h - 200) {
        random_height = random_height / 2;
    }
    random_size = Math.floor(Math.random() * 2) + 1.5 + "em"
    random_timer = Math.floor(Math.random() * 3000) + 2500
}

$(document).ready(function () {
    if (screen.width > 1140) {
        function gorandom() {
            go()
            $("#random-text").text(random_text).css({
                "color": random_color, "left": random_width,
                "top": random_height, "font-size": random_size
            }).hide().delay(100).show('slow').delay(3000).hide('slow')
        };
        setInterval(gorandom, 3200)
        function gorandom1() {
            go()
            $("#random-text1").text(random_text).css({
                "color": random_color, "left": random_width,
                "top": random_height, "font-size": random_size
            }).hide().delay(600).show('slow').delay(3000).hide('slow')
        };
        setInterval(gorandom1, 3400)
        function gorandom2() {
            go()
            $("#random-text2").text(random_text).css({
                "color": random_color, "left": random_width,
                "top": random_height, "font-size": random_size
            }).hide().delay(1100).show('slow').delay(3000).hide('slow')
        };
        setInterval(gorandom2, 3600)
        function gorandom3() {
            go()
            $("#random-text3").text(random_text).css({
                "color": random_color, "left": random_width,
                "top": random_height, "font-size": random_size
            }).hide().delay(1600).show('slow').delay(3000).hide('slow')
        };
        setInterval(gorandom3, 3800)
        function gorandom4() {
            go()
            $("#random-text4").text(random_text).css({
                "color": random_color, "left": random_width,
                "top": random_height, "font-size": random_size
            }).hide().delay(2100).show('slow').delay(3000).hide('slow')
        };
        setInterval(gorandom4, 4000)
    }

});