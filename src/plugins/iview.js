import Vue from 'vue'

import 'view-design/dist/styles/iview.css'
import '../my-theme/index.less'
import { Tooltip, Message, Button } from 'view-design'

Vue.prototype.$Message = Message
Vue.component('Button', Button);
Vue.component('Message', Message);
Vue.component('Tooltip', Tooltip);
