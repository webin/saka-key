import { Mode } from 'modes/mode/client';
import { isTextEditable } from 'lib/dom';
import { renderHints } from './render';
import { findHints } from './find';

class Hints extends Mode {
  onEnter = async (event) => {
    renderHints(findHints());
  }
  onExit = async (event) => {

  }
  keydown = async (event) => {
    event.stopImmediatePropagation();
    return this.name;
  }
  keypress = async (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    return 'COMMAND';
  }
  keyup = async (event) => {
    return this.name;
  }
  focusin = async (event) => {
    if (isTextEditable(event.target)) {
      return 'TEXT';
    }
    return this.name;
  }
  focusout = async (event) => {
    return this.name;
  }
  click = async (event) => {
    return this.name;
  }
  mousedown = async (event) => {
    if (isTextEditable(event.target)) {
      return 'TEXT';
    }
    return 'COMMAND';
  }
  scroll = async (event) => {
    return this.name;
  }
  actions = {}
}

export const HINTS = new Hints('HINTS');
