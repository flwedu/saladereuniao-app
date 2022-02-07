import RoomCard from "@/components/Room/RoomCard.vue";
import { mount, RouterLinkStub } from "@vue/test-utils";

const room = {
  id: 1,
  name: "Test Room",
  description: "No description",
};

describe("RoomCard.vue component", () => {
  it("Component should render correct data from props", () => {
    const wrapper = mount(RoomCard, {
      name: "room-card",
      propsData: {
        room,
      },
      components: {
        "router-link": RouterLinkStub
      },
    });

    const head = wrapper.findAll(".card > .head > span");
    expect(head.at(0).text()).toEqual(String(room.id));
    expect(head.at(1).text()).toEqual(room.name);

    const bodySpan = wrapper.find(".body span");
    expect(bodySpan.text()).toContain(room.description);
  });
});
