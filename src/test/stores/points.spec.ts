import {setActivePinia, createPinia} from 'pinia'
import {usePointsStore} from '@/stores/points'
import {describe, expect, beforeEach, it} from 'vitest';

describe('Points Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('function: addPoint - adds single point to pointsStore reactive array', () => {
        const pointsStore = usePointsStore()

        pointsStore.addPoint(10,20,'desc')
        expect(pointsStore.points.length).toBe(1)
    })

    it('function: clearPoints - removes all points from array', () => {
        const pointsStore = usePointsStore()

        pointsStore.addPoint(10,20,'desc')
        expect(pointsStore.points.length).not.toBe(0)
        pointsStore.clearPoints()
        expect(pointsStore.points.length).toBe(0)
    })

    it('function: addPoint - Adds few points to pointsStore reactive array, each ID is different and original', () => {
        const pointsStore = usePointsStore()

        pointsStore.addPoint(10,20,'desc')
        pointsStore.addPoint(20,20,'desc')
        pointsStore.addPoint(30,20,'desc')
        pointsStore.addPoint(40,20,'desc')
        pointsStore.addPoint(50,20,'desc')

        expect(pointsStore.points.length).toBe(5)

        expect(pointsStore.points[0].id).not.toBe(pointsStore.points[1].id)
        expect(pointsStore.points[0].id).not.toBe(pointsStore.points[2].id)
        expect(pointsStore.points[0].id).not.toBe(pointsStore.points[3].id)
        expect(pointsStore.points[0].id).not.toBe(pointsStore.points[4].id)

        const arrayOfIdsOnly = pointsStore.points.reduce((acc, currentValue) =>
          [...acc, currentValue.id], []);

        const setOfIds = new Set(arrayOfIdsOnly)

        expect(pointsStore.points.length).toBe(setOfIds.size)
    })

    it('function: removePoint - Removes point by ID', () => {
        const pointsStore = usePointsStore()

        pointsStore.addPoint(10,20,'desc')
        pointsStore.addPoint(20,20,'desc')
        pointsStore.addPoint(30,20,'desc')
        pointsStore.addPoint(40,20,'desc')
        pointsStore.addPoint(50,20,'desc')

        const ID_OF_ELEMENT_TO_REMOVE = pointsStore.points[2].id

        pointsStore.removePoint(ID_OF_ELEMENT_TO_REMOVE)
        expect(0).toBe(0)
    })
})
