/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ga7iwg1fgsod04i",
    "created": "2024-04-30 18:40:38.301Z",
    "updated": "2024-04-30 18:40:38.301Z",
    "name": "vendor",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "drtxwcvt",
        "name": "vendor",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "xkwczquo",
        "name": "commison",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hskut5rc",
        "name": "membership",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Gold",
            "Silver",
            "Premium",
            "Basic",
            "Affiliate"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ga7iwg1fgsod04i");

  return dao.deleteCollection(collection);
})
