export class PointsElement {
  id: number;
  value: number;
  classId: number;
  className: string;
  activityId: number;
  activity: string;

  constructor(
    id: number,
    value: number,
    classId: number,
    className: string,
    activityId: number,
    activity: string
  ) {
    this.id = id;
    this.value = value;
    this.classId = classId;
    this.className = className;
    this.activityId = activityId;
    this.activity = activity;
  }
}
