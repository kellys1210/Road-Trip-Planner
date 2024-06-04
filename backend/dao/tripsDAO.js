import { MongoClient } from "mongodb";

let trips;

export default class TripsDAO {
  static async injectDB() {
    if (trips) {
      return;
    }
    try {
      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db();
      trips = db.collection("PlanTrip");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in tripsDAO: ${e}`
      );
    }
  }

  static async getTrips({ filters = null, page = 0, tripsPerPage = 20 } = {}) {
    let query;
    if (filters) {
      if ("destination" in filters) {
        query = { $text: { $search: filters["destination"] } };
      }
    }

    let cursor;

    try {
      cursor = await trips.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { tripsList: [], totalNumTrips: 0 };
    }

    const displayCursor = cursor.limit(tripsPerPage).skip(tripsPerPage * page);

    try {
      const tripsList = await displayCursor.toArray();
      const totalNumTrips = await trips.countDocuments(query);

      return { tripsList, totalNumTrips };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { tripsList: [], totalNumTrips: 0 };
    }
  }
}
