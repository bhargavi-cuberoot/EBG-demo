/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w1spq47dbi1r72m")

  // remove
  collection.schema.removeField("vmsixkwy")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w1spq47dbi1r72m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vmsixkwy",
    "name": "qr",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
