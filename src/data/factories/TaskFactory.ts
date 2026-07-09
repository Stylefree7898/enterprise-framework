import { faker } from '@faker-js/faker';
import { Task } from 'src/models';

export class TaskFactory {

  static createRolePlay(): Task {

    const timestamp = Date.now();

    return {

      taskName: `Role Play ${timestamp}`,

      thumbnail: 'tests/assets/download.jpg',

      permissionLevel: 'Entry-level individual',

      description:
        faker.lorem.paragraph(),

      skill: 'Persistence',

      persona: 'Gabriel Gabriel',

      contactTitle: 'Regional Director'

    };
  }

}