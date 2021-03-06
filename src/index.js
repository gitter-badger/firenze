import Database from './Database';
import Adapter from './Adapter';
import Collection from './Collection';
import Model from './Model';
import P from './Promise';

import collectionFactory from './common/collectionFactory';
import modelFactory from './common/modelFactory';

export default {
  Database: Database,
  Adapter: Adapter,
  Collection: Collection,
  Model: Model,

  Promise: P,

  createCollectionClass: collectionFactory(),
  createModelClass: modelFactory()
};
