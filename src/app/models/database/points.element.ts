export class PointsElement {
    id: number;
    value: number;
    class_id: number;
    className: string;
    activity_id: number;
    activity: string;

    constructor(id: number, value: number,
                class_id: number, className: string,
                activity_id: number, activity: string) {
        this.id = id;
        this.value = value;
        this.class_id = class_id;
        this.className = className;
        this.activity_id = activity_id;
        this.activity = activity;
    }
}
