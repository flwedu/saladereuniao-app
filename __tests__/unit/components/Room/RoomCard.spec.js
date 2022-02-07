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
    expect(head.at(0).text()).toContain("1");
    expect(head.at(1).text()).toContain(room.name);

    const body = wrapper.find(".body");
    expect(body.text()).toContain(room.description);
  });
});
