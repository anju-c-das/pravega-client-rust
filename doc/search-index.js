var searchIndex = JSON.parse('{\
"pravega_client":{"doc":"A Rust client for Pravega.","t":[0,0,3,11,11,11,11,0,3,11,11,11,3,3,0,3,11,11,11,11,11,11,11,11,11,11,11,0,0,3,11,11,11,11,3,12,12,3,12,11,3,12,12,12,12,12,12,11,0,3,12,12,11,3,11,11,11,11,3,11,11,11,4,13,12,12,0,3,11,11,3,11,11,11,11,11,11,4,13,12,13,12,4,13,12,13,12,13,12,13,12,13,12,12,13,12,12,0,3,11,11,3,3,12,12,3,3,3,0,0,4,13,12,12,13,12,13,12,3,11,11,11,11,11,11,11,11,11,3,12,12,3,12,12,3,11,11,11,11,11,11,11,11,11,3,11,3,11,8,8,10,8,10,5,5,0,6,4,13,12,12,12,13,12,12,13,12,12,13,12,12,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["byte","writer","ByteWriter","seal","truncate_data_before","current_write_offset","seek_to_tail","reader","ByteReader","current_head","current_offset","available","ByteWriter","ByteReader","client_factory","ClientFactory","new","runtime","config","controller_client","create_event_writer","create_reader_group","create_transactional_event_writer","create_byte_writer","create_byte_reader","create_table","create_synchronizer","event","reader","EventReader","release_segment","release_segment_at","reader_offline","acquire_segment","Event","offset_in_segment","value","SegmentSlice","meta","is_empty","SliceMetadata","start_offset","scoped_segment","last_event_offset","read_offset","end_offset","partial_data_present","has_events","reader_group","ReaderGroup","name","state","create_reader","ReaderGroupConfig","new","to_bytes","from_bytes","get_streams","ReaderGroupConfigBuilder","set_group_refresh_time","add_stream","build","SerdeError","Cbor","msg","source","transactional_writer","TransactionalEventWriter","begin","get_txn","Transaction","txn_id","stream","write_event","commit","abort","check_status","TransactionalEventWriterError","PingerError","msg","TxnStreamControllerError","source","TransactionError","TxnSegmentWriterError","error_msg","TxnStreamWriterError","source","TxnClosed","id","TxnControllerError","source","TxnCommitError","id","status","TxnAbortError","id","status","writer","EventWriter","write_event","write_event_by_routing_key","EventReader","ReaderGroup","name","state","Transaction","TransactionalEventWriter","EventWriter","sync","synchronizer","SynchronizerError","SyncTableError","operation","source","SyncUpdateError","error_msg","SyncTombstoneError","error_msg","Synchronizer","new","get_outer_map","get_inner_map","get_name","get","get_key_version","fetch_updates","insert","remove","Key","key","key_version","Value","type_id","data","Update","new","insert","insert_tombstone","retain","get","get_inner_map","contains_key","contains_outer_key","is_empty","Insert","new","Remove","new","ValueData","ValueClone","clone_box","ValueSerialize","serialize_value","serialize","deserialize_from","table","Version","TableError","ConnectionError","can_retry","operation","source","KeyDoesNotExist","operation","error_msg","IncorrectKeyVersion","operation","error_msg","OperationError","operation","error_msg","Table","new","get","insert","insert_conditionally","remove","remove_conditionally","get_all","insert_all","insert_conditionally_all","remove_all","remove_conditionally_all","read_keys_stream","read_entries_stream","read_entries_stream_from_position","Synchronizer","Table","from","into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","into_iter","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","clone_box","serialize_value","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","to_string","borrow","borrow_mut","try_from","try_into","type_id","as_error_source","into_request","vzip","init","deref","deref_mut","drop","from","into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","to_string","borrow","borrow_mut","try_from","try_into","type_id","as_error_source","into_request","vzip","init","deref","deref_mut","drop","from","into","to_string","borrow","borrow_mut","try_from","try_into","type_id","as_error_source","into_request","vzip","init","deref","deref_mut","drop","from","into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","to_string","borrow","borrow_mut","try_from","try_into","type_id","as_error_source","into_request","vzip","init","deref","deref_mut","drop","from","into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","equivalent","into_request","vzip","get_hash","init","deref","deref_mut","drop","get_hash","clone_box","serialize_value","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","equivalent","into_request","vzip","init","deref","deref_mut","drop","from","into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","from","into","to_string","borrow","borrow_mut","try_from","try_into","type_id","as_error_source","into_request","vzip","init","deref","deref_mut","drop","from","into","borrow","borrow_mut","try_from","try_into","type_id","into_request","vzip","init","deref","deref_mut","drop","drop","drop","drop","drop","next","clone","clone","clone","clone","clone","default","default","default","eq","ne","eq","eq","ne","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","hash","description","cause","source","description","cause","source","description","cause","source","description","cause","source","description","cause","source","read","seek","write","flush","deserialize","deserialize","serialize","serialize","backtrace","backtrace","backtrace","backtrace","backtrace"],"q":["pravega_client","pravega_client::byte","pravega_client::byte::writer","","","","","pravega_client::byte","pravega_client::byte::reader","","","","pravega_client::byte","","pravega_client","pravega_client::client_factory","","","","","","","","","","","","pravega_client","pravega_client::event","pravega_client::event::reader","","","","","","","","","","","","","","","","","","","pravega_client::event","pravega_client::event::reader_group","","","","","","","","","","","","","","","pravega_client::event::reader_group::SerdeError","","pravega_client::event","pravega_client::event::transactional_writer","","","","","","","","","","","","pravega_client::event::transactional_writer::TransactionalEventWriterError","pravega_client::event::transactional_writer","pravega_client::event::transactional_writer::TransactionalEventWriterError","pravega_client::event::transactional_writer","","pravega_client::event::transactional_writer::TransactionError","pravega_client::event::transactional_writer","pravega_client::event::transactional_writer::TransactionError","pravega_client::event::transactional_writer","pravega_client::event::transactional_writer::TransactionError","pravega_client::event::transactional_writer","pravega_client::event::transactional_writer::TransactionError","pravega_client::event::transactional_writer","pravega_client::event::transactional_writer::TransactionError","","pravega_client::event::transactional_writer","pravega_client::event::transactional_writer::TransactionError","","pravega_client::event","pravega_client::event::writer","","","pravega_client::event","","","","","","","pravega_client","pravega_client::sync","pravega_client::sync::synchronizer","","pravega_client::sync::synchronizer::SynchronizerError","","pravega_client::sync::synchronizer","pravega_client::sync::synchronizer::SynchronizerError","pravega_client::sync::synchronizer","pravega_client::sync::synchronizer::SynchronizerError","pravega_client::sync::synchronizer","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","pravega_client::sync","pravega_client::sync::table","","","pravega_client::sync::table::TableError","","","pravega_client::sync::table","pravega_client::sync::table::TableError","","pravega_client::sync::table","pravega_client::sync::table::TableError","","pravega_client::sync::table","pravega_client::sync::table::TableError","","pravega_client::sync::table","","","","","","","","","","","","","","","pravega_client::sync","","pravega_client::byte","","","","","","","","","","","","","","","","","","","","","","","","","","pravega_client::client_factory","","","","","","","","","","","","","","","pravega_client::event","","","","","","","","","","","","","pravega_client::event::reader","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","pravega_client::event","","","","","","","","","","","","","pravega_client::event::reader_group","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","pravega_client::event","","","","","","","","","","","","","","","","","","","","","","","","","","pravega_client::event::transactional_writer","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","pravega_client::event","","","","","","","","","","","","","pravega_client::sync::synchronizer","","","","","","","","","","","","","","","pravega_client::sync","","","","","","","","","","","","","pravega_client::sync::synchronizer","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","pravega_client::sync::table","","","","","","","","","","","","","","","pravega_client::sync","","","","","","","","","","","","","pravega_client::byte","pravega_client::event::reader","pravega_client::event","","pravega_client::event::reader","pravega_client::client_factory","pravega_client::event::reader","pravega_client::event::reader_group","pravega_client::sync::synchronizer","","pravega_client::event::reader","","pravega_client::event::reader_group","","","pravega_client::sync::synchronizer","","","pravega_client::event::reader","","","pravega_client::event::reader_group","","pravega_client::event::transactional_writer","","pravega_client::sync::synchronizer","","","pravega_client::sync::table","pravega_client::event::reader_group","pravega_client::event::transactional_writer","","pravega_client::sync::synchronizer","pravega_client::sync::table","pravega_client::sync::synchronizer","pravega_client::event::reader_group","","","pravega_client::event::transactional_writer","","","","","","pravega_client::sync::synchronizer","","","pravega_client::sync::table","","","pravega_client::byte","","","","pravega_client::event::reader_group","pravega_client::sync::synchronizer","pravega_client::event::reader_group","pravega_client::sync::synchronizer","pravega_client::event::reader_group","pravega_client::event::transactional_writer","","pravega_client::sync::synchronizer","pravega_client::sync::table"],"d":["The Byte API for writing and reading data to a segment in …","","Allow for writing raw bytes directly to a segment.","Seal the segment and no further writes are allowed.","Truncate data before a given offset for the segment. No …","Track the current write position for this writer.","Seek to the tail of the segment.","","A ByteReader enables reading raw bytes from a segment.","Return the head of current readable data in the segment.","Return the current read offset.","Return the bytes that are available to read instantly …","Allow for writing raw bytes directly to a segment.","A ByteReader enables reading raw bytes from a segment.","Factory to create components in Pravega Rust client.","Applications should use ClientFactory to create resources …","Create a new ClientFactory.","","","","","","","","","","","The Event API for writing and reading data.","","Read events from Stream.","Release a partially read segment slice back to event …","Release a segment back to the reader and also indicate …","Mark the reader as offline. This will ensure the segments …","This function returns a SegmentSlice from the data …","This represents an event that was read from a Pravega …","","","This represents a segment slice which can be used to read …","","","","","","","","","","Method to verify if the Segment has pending events that …","","A collection of readers that collectively read all the …","","","Create a new EventReader under the ReaderGroup. This …","","Create a new ReaderGroupConfig by specifying the group …","Method to serialize the ReaderGroupConfig into bytes.","Method to de-serialize the ReaderGroupConfig object from …","Method to obtain the streams in a ReaderGroupConfig.","","Set reader group refresh time.","Add a Pravega Stream to the reader group.","Build a ReaderGroupConfig object. This method panics for …","","","","","","Write events to a stream transactionally.","This method opens a transaction by sending a request to …","This method returns the Transaction based on the given …","Pravega Transaction support.","get the transaction id.","get the stream that this transaction is based on.","write_event accepts a vec of bytes as the input event and …","commit accepts a timestamp and will send a commit request …","abort will send abort request to Pravega controller.","check the current Transaction status by sending request …","","","","","","","","","","","","","","","","","","","","","","Write events exactly once to a given stream.","Write an event without routing key.","Writes an event with a routing key.","Read events from Stream.","A collection of readers that collectively read all the …","","","Pravega Transaction support.","Write events to a stream transactionally.","Write events exactly once to a given stream.","Pravega synchronization primitives.","","","","","","","","","","Provide a map that is synchronized across different …","","Get the outer map currently held in memory. The return …","Get the inner map currently held in memory. The return …","Get the name of the Synchronizer.","Get the Value associated with the map. The data in Value …","Get the Key version of the given key,","Fetch the latest map from remote server and apply it to …","Insert/Update a list of keys and applies it atomically to …","Remove a list of keys and apply it atomically to local …","The Key struct in the in memory map. It contains two …","","","The Value struct in the in memory map. It contains two …","","","The Update contains a nested map and a version map, which …","","insert method needs an outer_key and an inner_key to find …","insert_tombstone method replaces the original value with …","retain a specific map to make sure it’s not altered by …","get method will take an outer_key and an inner_key and …","get_inner_map method will take an outer_key return the …","Check if an inner key exists. The tombstoned value will …","Check if an outer_key exists. The tombstoned value will …","","Insert struct is used internally to update the server …","","The remove struct is used internally to remove a value …","","The trait bound for the ValueData","Clone trait helper.","","Serialize trait helper, we need to serialize the …","","Serialize the  into the Vec by using cbor serializer. …","Deserialize the Value into the type T by using cbor …","","","","","","","","","","","","","","","","","Table is the client implementation of Table Segment in …","","Return the latest value corresponding to the key.","Unconditionally insert a new or update an existing entry …","Conditionally insert a key-value pair into the table map. …","Unconditionally remove a key from the Table. If the key …","Conditionally remove a key from the Table if it matches …","Return the latest values for a given list of keys. If the …","Unconditionally insert a new or updates an existing entry …","Conditionally insert key-value pairs into the table. The …","Unconditionally remove the provided keys from the table.","Conditionally remove keys after checking the key version. …","Read keys as an Async Stream. This method deserializes …","Read entries as an Async Stream. This method deserialized …","Read entries as an Async Stream from a given position. …","Provide a map that is synchronized across different …","Table is the client implementation of Table Segment in …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Writes the given data to the server. It doesn’t mean …","This is a blocking call that will wait for data to be …","","","","","","","","",""],"i":[0,0,0,1,1,1,1,0,0,2,2,2,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,0,0,0,4,4,4,4,0,5,5,0,6,6,0,7,7,7,7,7,7,7,0,0,8,8,8,0,9,9,9,9,0,10,10,10,0,11,12,12,0,0,13,13,0,14,14,14,14,14,14,0,15,16,15,17,0,18,19,18,20,18,21,18,22,18,23,23,18,24,24,0,0,25,25,0,0,8,8,0,0,0,0,0,0,26,27,27,26,28,26,29,0,30,30,30,30,30,30,30,30,30,0,31,31,0,32,32,0,33,33,33,33,33,33,33,33,33,0,34,0,35,0,0,36,0,37,0,0,0,0,0,38,39,39,39,38,40,40,38,41,41,38,42,42,0,43,43,43,43,43,43,43,43,43,43,43,43,43,43,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,33,33,33,33,33,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,35,35,35,35,35,35,35,35,35,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,43,43,43,43,43,43,43,43,43,43,43,43,43,1,6,14,25,6,3,7,9,31,32,6,7,10,9,9,31,32,32,5,6,7,9,11,15,18,26,31,32,38,11,15,18,26,38,31,11,11,11,15,15,15,18,18,18,26,26,26,38,38,38,2,2,1,1,9,32,9,32,11,15,18,26,38],"f":[null,null,null,[[]],[[["i64",15]]],[[],["i64",15]],[[]],null,null,[[],[["result",6],["u64",15]]],[[],["i64",15]],[[],["usize",15]],null,null,null,null,[[["clientconfig",3]],["clientfactory",3]],[[],["runtime",3]],[[],["clientconfig",3]],[[],["controllerclient",8]],[[["scopedstream",3]],["eventwriter",3]],[[["scope",3],["string",3],["scopedstream",3]]],[[["scopedstream",3],["writerid",3]]],[[["scopedsegment",3]],["bytewriter",3]],[[["scopedsegment",3]],["bytereader",3]],[[["scope",3],["string",3]]],[[["scope",3],["string",3]]],null,null,null,[[["segmentslice",3]]],[[["i64",15],["segmentslice",3]]],[[]],[[]],null,null,null,null,null,[[],["bool",15]],null,null,null,null,null,null,null,[[],["bool",15]],null,null,null,null,[[["string",3]]],null,[[["u64",15]]],[[],[["vec",3],["serdeerror",4],["result",4]]],[[],[["result",4],["serdeerror",4]]],[[],[["scopedstream",3],["vec",3]]],null,[[["u64",15]]],[[["scopedstream",3]]],[[],["readergroupconfig",3]],null,null,null,null,null,null,[[]],[[["txid",3]]],null,[[],["txid",3]],[[],["scopedstream",3]],[[["string",3],["option",4],["vec",3],["u8",15]]],[[["timestamp",3]]],[[]],[[]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["vec",3],["u8",15]]],[[["string",3],["vec",3],["u8",15]]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["scope",3],["string",3],["clientfactory",3]]],[[],[["hashmap",3],["string",3],["hashmap",3]]],[[["str",15]],[["string",3],["value",3],["hashmap",3]]],[[],["string",3]],[[["str",15]],[["option",4],["value",3]]],[[["option",4],["str",15]],["version",6]],[[]],[[]],[[]],null,null,null,null,null,null,null,[[["hashmap",3],["vec",3],["value",3],["hashmap",3],["string",3],["vec",3],["remove",3],["insert",3]]],[[["string",3],["box",3],["valuedata",8]]],[[["string",3]],[["result",4],["synchronizererror",4]]],[[["string",3]]],[[["str",15]],[["option",4],["value",3]]],[[["str",15]],[["string",3],["value",3],["hashmap",3]]],[[["str",15]],["bool",15]],[[["str",15]],["bool",15]],[[],["bool",15]],null,[[["string",3],["option",4]]],null,[[["string",3]]],null,null,[[],[["box",3],["valuedata",8]]],null,[[["cborserializer",3]],[["error",3],["result",4]]],[[["valuedata",8]],[["vec",3],["error",3],["result",4]]],[[],[["result",4],["error",3]]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["scope",3],["string",3],["clientfactory",3]]],[[]],[[["i64",15]]],[[["version",6],["i64",15]]],[[["i64",15]]],[[["version",6],["i64",15]]],[[["vec",3]]],[[["i64",15],["vec",3]]],[[["i64",15],["vec",3]]],[[["vec",3],["i64",15]]],[[["vec",3],["i64",15]]],[[["i32",15]]],[[["i32",15]]],[[["i64",15],["i32",15]]],null,null,[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[],[["global",3],["box",3],["valuedata",8]]],[[["serializer",3]],[["result",4],["error",3]]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[],["string",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["error",8]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[],["string",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["error",8]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[],["string",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["error",8]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[],["string",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["error",8]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["bool",15]],[[],["request",3]],[[]],[[],["u64",15]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[],["u64",15]],[[],[["global",3],["box",3],["valuedata",8]]],[[["serializer",3]],[["result",4],["error",3]]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["bool",15]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[],["string",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["error",8]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["request",3]],[[]],[[],["usize",15]],[[["usize",15]]],[[["usize",15]]],[[["usize",15]]],[[]],[[]],[[]],[[]],[[],["option",4]],[[],["clientfactory",3]],[[],["slicemetadata",3]],[[],["readergroupconfig",3]],[[],["key",3]],[[],["value",3]],[[]],[[]],[[]],[[["readergroupconfig",3]],["bool",15]],[[["readergroupconfig",3]],["bool",15]],[[],["bool",15]],[[["value",3]],["bool",15]],[[["value",3]],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[],["str",15]],[[],[["error",8],["option",4]]],[[],[["error",8],["option",4]]],[[],["str",15]],[[],[["error",8],["option",4]]],[[],[["error",8],["option",4]]],[[],["str",15]],[[],[["error",8],["option",4]]],[[],[["error",8],["option",4]]],[[],["str",15]],[[],[["error",8],["option",4]]],[[],[["error",8],["option",4]]],[[],["str",15]],[[],[["error",8],["option",4]]],[[],[["error",8],["option",4]]],[[],[["result",4],["usize",15],["error",3]]],[[["seekfrom",4]],[["result",6],["u64",15]]],[[],[["result",4],["usize",15],["error",3]]],[[],[["error",3],["result",4]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],[["backtrace",3],["option",4]]],[[],[["backtrace",3],["option",4]]],[[],[["backtrace",3],["option",4]]],[[],[["backtrace",3],["option",4]]],[[],[["backtrace",3],["option",4]]]],"p":[[3,"ByteWriter"],[3,"ByteReader"],[3,"ClientFactory"],[3,"EventReader"],[3,"Event"],[3,"SegmentSlice"],[3,"SliceMetadata"],[3,"ReaderGroup"],[3,"ReaderGroupConfig"],[3,"ReaderGroupConfigBuilder"],[4,"SerdeError"],[13,"Cbor"],[3,"TransactionalEventWriter"],[3,"Transaction"],[4,"TransactionalEventWriterError"],[13,"PingerError"],[13,"TxnStreamControllerError"],[4,"TransactionError"],[13,"TxnSegmentWriterError"],[13,"TxnStreamWriterError"],[13,"TxnClosed"],[13,"TxnControllerError"],[13,"TxnCommitError"],[13,"TxnAbortError"],[3,"EventWriter"],[4,"SynchronizerError"],[13,"SyncTableError"],[13,"SyncUpdateError"],[13,"SyncTombstoneError"],[3,"Synchronizer"],[3,"Key"],[3,"Value"],[3,"Update"],[3,"Insert"],[3,"Remove"],[8,"ValueClone"],[8,"ValueSerialize"],[4,"TableError"],[13,"ConnectionError"],[13,"KeyDoesNotExist"],[13,"IncorrectKeyVersion"],[13,"OperationError"],[3,"Table"]]}\
}');
initSearch(searchIndex);