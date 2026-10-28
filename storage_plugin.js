(function () {
  'use strict';
  var STORAGE_KEY = 'chess_emblem_save_v1';
  miniquad_add_plugin({
    register_plugin: function (importObject) {
      importObject.env.chess_save_read = function (ptr, cap) {
        var raw = null;
        try { raw = window.localStorage.getItem(STORAGE_KEY); } catch (e) { raw = null; }
        if (raw == null) return 0;
        var bytes = new TextEncoder().encode(raw);
        if (bytes.length > cap) return -1;
        new Uint8Array(wasm_memory.buffer, ptr, bytes.length).set(bytes);
        return bytes.length;
      };
      importObject.env.chess_save_write = function (ptr, len) {
        var bytes = new Uint8Array(wasm_memory.buffer, ptr, len);
        var text = new TextDecoder().decode(bytes);
        try {
          window.localStorage.setItem(STORAGE_KEY, text);
          return 1;
        } catch (e) {
          console.warn('No se pudo guardar la partida en localStorage', e);
          return 0;
        }
      };
    },
    version: 1,
    name: 'chess_storage',
    on_init: function () {},
  });
})();
