import Realm from 'realm';

const FavesSchema = {
  name: 'Faves',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
};

const realm = new Realm({ schema: [FavesSchema] });

export default realm;

export const addFave = id => {
  realm.write(() => {
    realm.create('Faves', { id, faved_on: new Date() });
  });
};

export const removeFave = id => {
  realm.write(() => {
    const itemToDelete = realm.objects('Faves').filtered('id == $0', id);
    realm.delete(itemToDelete);
  });
};

export const getAllFaves = () => realm.objects('Faves');
