export class Widget{
	_id:String;
	name:String;
	widgeetType:String;
	pageId:String;
	size?:Number;
	text?:String;
	width?:String;
	url?:String;
	

	constructor(id, widgetType, pageId, size?,text?, width?, url?){
		this._id =_id;
		this.widgetType = widgetType;
		this.pageId = pageId;

	}
}