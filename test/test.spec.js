/*global describe, it, before */

import chai from 'chai';
import IpHelper from '../lib/IpHelper.min.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Test ip address to interger function',  () => {
  before(() => {
    lib = new IpHelper();
  });
  describe('Test normal ip address', () => {
    it('"0.0.0.0"=>0', () => {
      expect(lib.ip2int("0.0.0.0")).to.be.equal(0);
    });

    it('"127.0.0.1"=>2130706433', () => {
      expect(lib.ip2int("127.0.0.1")).to.be.equal(2130706433);
    });

    it('"172.168.5.1"=>2896692481', () => {
      expect(lib.ip2int("172.168.5.1")).to.be.equal(2896692481);
    });

    it('"127.255.255.255"=>2147483647', () => {
      expect(lib.ip2int("127.255.255.255")).to.be.equal(2147483647);
    });

    it('"255.255.255.255"=>4294967295', () => {
      expect(lib.ip2int("255.255.255.255")).to.be.equal(4294967295);
    });

  });

  describe('Test ip address with spaces near dot', () => {
    it('"0. 0.0 .0"=>0', () => {
      expect(lib.ip2int("0. 0.0 .0")).to.be.equal(0);
    });

    it('"127. 0 .0.1"=>2130706433', () => {
      expect(lib.ip2int("127. 0 .0.1")).to.be.equal(2130706433);
    });

    it('"172. 168.5. 1"=>2896692481', () => {
      expect(lib.ip2int("172. 168.5. 1")).to.be.equal(2896692481);
    });

    it('" 127 . 255 . 255 .  255"=>2147483647', () => {
      expect(lib.ip2int(" 127 . 255 . 255 .  255")).to.be.equal(2147483647);
    });

    it('"255  . 255. 255   .255 "=>4294967295', () => {
      expect(lib.ip2int("255  . 255. 255   .255 ")).to.be.equal(4294967295);
    });

  });

  describe('Test ip address with spaces in number', () => {

    it('"12 7.0.0.1"=>-1', () => {
      expect(lib.ip2int("12 7.0.0.1")).to.be.equal(-1);
    });

    it('"172.1 68. 5.1"=>-1', () => {
      expect(lib.ip2int("172.1 68. 5.1")).to.be.equal(-1);
    });

  });

  describe('Test ip address with negtive sign', () => {
    it('"0.-0.0.0"=>-1', () => {
      expect(lib.ip2int("0.-0.0.0")).to.be.equal(-1);
    });

    it('"-127.0.0.1"=>-1', () => {
      expect(lib.ip2int("-127.0.0.1")).to.be.equal(-1);
    });

    it('"172.-168.5.1"=>-1', () => {
      expect(lib.ip2int("172.-168.5.1")).to.be.equal(-1);
    });

    it('"127.255.-255.255"=>-1', () => {
      expect(lib.ip2int("127.255.-255.255")).to.be.equal(-1);
    });

    it('"255.255.255.-255"=>-1', () => {
      expect(lib.ip2int("255.255.255.-255")).to.be.equal(-1);
    });

  });

  describe('Test ip address with invalid letters', () => {
    it('"0.ab.0.0"=>-1', () => {
      expect(lib.ip2int("0.ab.0.0")).to.be.equal(-1);
    });

    it('"@127.0.0.1"=>-1', () => {
      expect(lib.ip2int("@127.0.0.1")).to.be.equal(-1);
    });

    it('"172.1q68.5.1"=>-1', () => {
      expect(lib.ip2int("172.1q68.5.1")).to.be.equal(-1);
    });

  });
});
