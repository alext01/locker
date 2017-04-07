query_head = 'INSERT INTO lockers ("lockerNumber", "location", "lockerCombination", "status", "lockerComposite", "createdAt", "updatedAt") VALUES '

combination = '12 34 56'
status = 'PENDING'
time_stamp = 'now()'

open('locker_tracker_dev.sql', 'w') { |f|

f.puts query_head

  (1..101).each { |n|
    case n
    when 1..25 then location = 'A'
    when 26..50 then location = 'B'
    when 51..75 then location = 'C'
    when 75..101 then location = 'D'
    end

    f.puts "('#{n.to_s}','#{location}','#{combination}','#{status}','#{n.to_s << '-' << location}',#{time_stamp},#{time_stamp})"
    if n == 101
      f.print ';'
    else
      f.print ','
    end
  }
}
