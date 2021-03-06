import Vue from 'vue'

import 'view-design/dist/styles/iview.css'
import '../my-theme/index.less'
import { Tooltip, Message, Button, Row, Col, Input, Checkbox } from 'view-design'

Vue.prototype.$Message = Message
Vue.component('Button', Button);
Vue.component('Message', Message);
Vue.component('Tooltip', Tooltip);
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Input', Input)
Vue.component('Checkbox', Checkbox)

