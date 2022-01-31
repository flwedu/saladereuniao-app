import { shallowMount } from "@vue/test-utils";
import HeaderApp from "@/components/layout/HeaderApp.vue";

/* eslint-disable no-undef */
describe("HeaderApp.vue component", () => {
  it("Component should mount", () => {
    const wrapper = shallowMount(HeaderApp, {});

    expect(wrapper.find("h1").text()).toEqual("Sala de Reuniões App");
  });
});
