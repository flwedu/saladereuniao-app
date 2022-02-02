import { shallowMount } from "@vue/test-utils";
import RoomCard from "@/components/Room/RoomCard.vue";

const roomData = {
  id: 1,
  name: "Test Room",
  description: "No description",
};

describe("RoomCard.vue component", () => {
  it("Component should render correct data", () => {
    const wrapper = shallowMount(RoomCard, {
      name: "room-card",
      props: {
        room: { ...roomData },
      },
      components: {},
    });

    expect(wrapper.find(".card .head").contains("span")).toBeTruthy();
  });
});
