import { createStore } from 'vuex'

const appSteps = [
	"intro",
	"get-on",
	"authorise",
	"take-1",
	"take-2",
	"pedal-1",
	"pedal-2",
	"end",
	"exit"
]

let step = 0
	

export default createStore({
	state() {
		return {
			appStep: appSteps[step],
		}
	},
	mutations: {
		introStep (state){
			step = 0
			state.appStep = appSteps[step]
		},
		firstStep (state){
			step = 1
			state.appStep = appSteps[step]
		},
		nextStep (state){
			step += 1
			state.appStep = appSteps[step]
		},
		previousStep (state){
			step -= 1
			state.appStep = appSteps[step]
		},
	},
	actions: {

	},
	modules: {

	}
})
