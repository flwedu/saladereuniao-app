import { mount } from "@vue/test-utils"
import DateTimeField from "@/components/shared/DateTimeField.vue"

describe("Component should render with received data", () => {

    const wrapper = mount(DateTimeField, {
        propsData: {
            editingMode: false,
            label: "Test",
            dateTime: [2020, 11, 0, 15, 0, 0],
        }
    })
    const input = wrapper.find("input");

    it("input should render the correct DateTime", () => {

        expect(input.element.value).toEqual("2020-12-01T15:00")
    })
})
