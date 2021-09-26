const { VK, Keyboard } = require('vk-io');
const vk = new VK({
	token: "029e355838e51070ee40ce9eb955e56cb95b5ccda4d7a2b5aa666fbadb04f65e8db1c7fd8f985013f93e3"
});
const {
	api
} = vk;

days = {

"понедельник": "8.30-10.00 - Ин.яз(немец)\n10.20-11.50 - Информатика\n12.10-13.40 - Математика\n13.50-15.10 - Ин.яз(англ)",

"вторник": "8.30-10.00 - Физика\n10.20-11.50 - Математика\n12.10-13.40 - Химия\n13.50-15.10 - Физкультура",

"среда": "8.30-10.00 - Математика\n10.20-11.50 - ОБЖ\n12.10-13.40 - Русский язык\n13.50-15.10 - Родной язык",

"четверг": "8.30-10.00 - Ин.яз(немец)\n10.20-11.50 - Обществознание\n12.10-13.40 - История\n13.50-15.10 - Ин.яз(англ)",

"пятница": "8.30-10.00 - Литература\n10.20-11.50 - Физика\n12.10-13.40 - История\n13.50-15.10 - Математика"

}

vk.updates.start();

vk.updates.on('message', (context, next) => {

if (context.text == null || context.isGroup == true || context.text == 'undefined') return

if (Object.keys(days).indexOf(context.text.toLowerCase()) >= 0) {

      context.send({

        message: days[context.text],

        keyboard: Keyboard.builder()

            .textButton({

                label: 'Вся неделя',

                payload: {

                    command: 'Вся неделя'

                }

            })

            .inline()

    })

    }
 if (context.text.toLowerCase().includes('вся неделя')){

context.send(`Расписание на всю неделю:\n \nПонедельник:\n${days["понедельник"]}\n \nВторник:\n${days["вторник"]}\n \nСреда:\n${days["среда"]}\n \nЧетверг:\n${days["четверг"]}\n \nПятница:\n${days["пятница"]}`)

}
})
