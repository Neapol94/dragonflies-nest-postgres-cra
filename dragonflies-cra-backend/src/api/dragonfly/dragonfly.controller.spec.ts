import { DragonflyController } from './dragonfly.controller';
import { Dragonflies } from './dragonfly.entity';
import { DragonflyService } from './dragonfly.service';

describe('DragonflyController', () => {
  let dragonflyController: DragonflyController;
  let dragonflyService: DragonflyService;

  beforeEach(() => {
    dragonflyService = new DragonflyService();
    dragonflyController = new DragonflyController(dragonflyService);
  });

  describe('getAllDragonflies', () => {
    it('should return an array of dragonflies', async () => {
      const result = ['Dragonflies'];
      jest.spyOn(dragonflyService, 'getAllDragonflies').mockImplementation(() => result);

      expect(await dragonflyController.getAllDragonflies()).toBe(result);
    });
  });
});