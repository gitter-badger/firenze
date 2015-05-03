/* global describe, before, after, it */

var should = require('should');
var lib = require('../../index');
var config = require('../config');

describe('Database', function () {
  it('should connect and disconnect from server', function (done) {
    var db = new lib.Database(config.mysql);
    db.close(done);
  });

  it('should generate Collection class', function (done) {
    var db = new lib.Database(config.mysql);
    var Posts = require('../collections/Posts')(db);

    var posts = new Posts();
    posts.table.should.be.exactly('posts');
    db.close(done);
  });

  it('should generate Model class', function (done) {
    var db = new lib.Database(config.mysql);
    var Post = require('../models/Post')(db);

    var post = new Post();
    post.alias.should.be.exactly('Post');
    db.close(done);
  });
});