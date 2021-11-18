const { VK, Keyboard } = require('vk-io');
const vk = new VK({
	token: "029e355838e51070ee40ce9eb955e56cb95b5ccda4d7a2b5aa666fbadb04f65e8db1c7fd8f985013f93e3"
});
const {
	api
} = vk;

days = {

"понедельник": "8.30-10.00 - Ин.яз(немец) каб. №24/3\n10.20-11.50 - Математика каб. №17\n12.10-13.40 - Информатика каб. №13/2\n13.50-15.10 - Ин.яз(англ) каб. №30/3",

"вторник": "8.30-10.00 - Физика каб. №14а/2\n10.20-11.50 - Математика каб. №17\n12.10-13.40 - Химия каб. №13\n13.50-15.10 - Физкультура",

"среда": "8.30-10.00 - Математика каб. №17\n10.20-11.50 - ОБЖ каб. №14\n12.10-13.40 - Русский язык каб. №9\n13.50-15.10 - Родной язык каб. №9",

"четверг": "8.30-10.00 - Ин.яз(немец) каб. №24/3\n10.20-11.50 - Обществознание каб. №20/2\n12.10-13.40 - История каб. №12\n13.50-15.10 - Ин.яз(англ) каб. №30/3",

"пятница": "8.30-10.00 - Литература каб. №9\n10.20-11.50 - Физика каб. №14а/2\n12.10-13.40 - История каб. №12\n13.50-15.10 - Математика каб. №17"

}


vk.updates.start();

vk.updates.on('message', (context, next) => {


if (context.text == null || context.isGroup == true || context.text == 'undefined') return

if (Object.keys(days).indexOf(context.text.toLowerCase()) >= 0) {

      context.send({
        keyboard: Keyboard.builder()

            .textButton({

                label: 'Понедельник',

                payload: {

                    command: 'Понедельник'

                }

            })

            .inline()

            .textButton({

                label: 'Вторник',

                payload: {

                    command: 'Вторник'

                }

            })

            .inline()
            .textButton({

                label: 'Среда',

                payload: {

                    command: 'Среда'

                }

            })

            .inline()

            .textButton({

                label: 'Четверг',

                payload: {

                    command: 'Четверг'

                }

            })

            .inline()

            .textButton({

                label: 'Пятница',

                payload: {

                    command: 'Пятница'

                }

            })

            .inline()

    })

    }
 if (context.text.toLocaleLowerCase().includes('понедельник')){

     context.send(`${days["понедельник"]}`)
 }

    if (context.text.toLocaleLowerCase().includes('вторник')){

        context.send(`${days["вторник"]}`)
    }

    if (context.text.toLocaleLowerCase().includes('среда')){

        context.send(`${days["среда"]}`)
    }
    if (context.text.toLocaleLowerCase().includes('четверг')){

        context.send(`${days["четверг"]}`)
    }
    if (context.text.toLocaleLowerCase().includes('пятница')){

        context.send(`${days["пятница"]}`)
    }

})
