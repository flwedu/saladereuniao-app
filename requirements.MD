# Requirements document

## FR

### Features according to user access level

For users with view-only permissions:

- Application should list the created rooms;
- Application should allow showing the details of a specified room;
- Application should list the created room events;
- Application should list the room events of a specific room;
- Application should allow showing the details of a specified room event;

Users with create permission:

- Same requeriments for users with view-only permissions;
- Application should allow creating a new room;
- Application should allow creating a new room event;

For users with admin permission:

- Same requeriments for users with view-only and create permissions;
- Application should allow modifying or deleting a specific room;
- Application should allow modifying or deleting a specific room event;

### Business rules

- A room event must belong to one room and only one;
- An room event cannot compete with another (using the same time) in the same room.
